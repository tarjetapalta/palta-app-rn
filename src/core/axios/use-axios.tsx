import { useEffect, useReducer, useCallback, Dispatch, Reducer } from 'react';
import DefaultAxios, {
  AxiosError,
  AxiosResponse,
  AxiosInstance,
  AxiosRequestConfig,
} from 'axios';

let axiosInstance: AxiosInstance;

export function resetConfigure(): void {
  axiosInstance = DefaultAxios;
}

resetConfigure();

export function configure(options: { axios?: AxiosInstance }): void {
  if (options.axios) {
    axiosInstance = options.axios;
  }
}

const REQUEST_START = 'REQUEST_START';
const REQUEST_END = 'REQUEST_END';
const REQUEST_RESET = 'REQUEST_RESET';

interface State<T, E> {
  loading: boolean;
  response?: AxiosResponse<T> | AxiosError<E>;
  error?: boolean;
  data?: T;
}

interface ActionStart {
  type: typeof REQUEST_START;
}

interface ActionSuccess<T> {
  type: typeof REQUEST_END;
  error: false;
  payload: AxiosResponse<T>;
}
interface ActionError<E> {
  type: typeof REQUEST_END;
  error: true;
  payload: AxiosError<E>;
}

interface ActionReset {
  type: typeof REQUEST_RESET;
}

type Action<T, E> =
  | ActionStart
  | ActionSuccess<T>
  | ActionError<E>
  | ActionReset;

function reducer<T, E>(state: State<T, E>, action: Action<T, E>): State<T, E> {
  switch (action.type) {
    case REQUEST_START:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case REQUEST_END: {
      if (action.error) {
        return {
          ...state,
          loading: false,
          response: action.payload,
          error: true,
        };
      }

      return {
        ...state,
        loading: false,
        response: action.payload,
        data: action.payload.data,
      };
    }
    case REQUEST_RESET:
      return {
        loading: false,
        error: false,
        data: undefined,
      };
    default:
      return state;
  }
}

const initialState = {
  loading: false,
  error: false,
  data: undefined,
  manual: false,
};

function request<T, E>(
  config: AxiosRequestConfig,
  dispatch: Dispatch<Action<T, E>>,
): void {
  dispatch({
    type: REQUEST_START,
  });

  axiosInstance({
    ...config,
  })
    .then((response) => {
      dispatch({
        type: REQUEST_END,
        payload: response,
        error: false,
      });
    })
    .catch((err) => {
      const { url } = config;
      // eslint-disable-next-line no-console
      if (err !== 'Network request failed') console.log(err, url);
      dispatch({
        type: REQUEST_END,
        payload: err,
        error: true,
      });
    });
}

interface UseAxios extends AxiosRequestConfig {
  manual: boolean;
}

export function useAxios<T = undefined, E = undefined>({
  baseURL,
  url,
  method,
  params,
  data,
  manual,
}: UseAxios): [State<T, E>, (config?: AxiosRequestConfig) => void, () => void] {
  const [state, dispatch] = useReducer<Reducer<State<T, E>, Action<T, E>>>(
    reducer,
    initialState,
  );

  useEffect(() => {
    if (!manual) {
      request(
        {
          baseURL,
          url,
          method,
          params,
          data,
        },
        dispatch,
      );
    }
  }, [baseURL, url, method, params, data, manual]);

  const execute = useCallback((configOverride) => {
    request(configOverride, dispatch);
  }, []);

  const reset = useCallback(() => {
    dispatch({ type: REQUEST_RESET });
  }, []);

  return [state, execute, reset];
}
