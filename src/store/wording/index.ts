import { atom } from 'recoil';

export const home = {
  description: 'Billetera virtual.',
  descriptionExtends: 'Dinero real',
  primaryActionLabel: 'No tengo cuenta',
  primaryAction: 'Registrarme',
  secondaryActionLabel: 'Ya tengo cuenta',
  secondaryAction: 'Iniciar sesión',
};

export type WordingHomeType = typeof home;

const emailErrors = {
  required: 'El campo es requerido',
  invalidEmail: 'El email es invalido',
  requestError: 'Tuvimos un problema, inténtelo más tarde',
};

const passwordErrors = {
  required: 'El campo es requerido',
  min: 'Debe tener al menos 6 caracteres',
};

const emailPassword = {
  title: 'Bienvenido de nuevo',
  inputs: {
    email: {
      label: 'Ingresá tu email acá',
      errors: emailErrors,
    },
    password: {
      label: 'Ingresá tu contraseña acá',
      errors: passwordErrors,
    },
  },
};

export type WordingEmailPasswordType = typeof emailPassword;

export const wording = atom({
  key: 'wording',
  default: {
    screens: {
      home,
      emailPassword,
    },
  },
});
