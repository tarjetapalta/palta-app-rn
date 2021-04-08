import React, { FunctionComponent } from 'react';

import { KeyColors } from '@theme/colors';
import {
  ArrowLeft,
  Close,
  AccountBalanceWallet,
  Assignment,
  History,
  PersonBlack,
  Security,
  PrivacyTip,
  ArrowRight,
  PermIdentity,
  NotificationNone,
  Star,
  Info,
  DirectionsBus,
  RequestQuote,
  Edit,
  Visibility,
  Share,
  Whatsapp,
  PictureAsPdf,
  WineBar,
  West,
} from './icons-svg';
import { IconsSvgProps } from './icons-svg/types';
import { IconId } from './types';

interface IconProps {
  iconId: IconId;
  scale?: number;
  color?: KeyColors;
}

const ICONS_SVG: {
  [key in IconId]: FunctionComponent<IconsSvgProps>;
} = {
  UNKNOWN: ArrowLeft,
  ARROW_LEFT: ArrowLeft,
  CLOSE: Close,
  ACCOUNT_BALANCE_WALLET: AccountBalanceWallet,
  ASSIGNMENT: Assignment,
  HISTORY: History,
  PERSON_BLACK: PersonBlack,
  SECURITY: Security,
  PRIVACY_TIP: PrivacyTip,
  ARROW_RIGHT: ArrowRight,
  PERM_IDENTITY: PermIdentity,
  NOTIFICATION_NONE: NotificationNone,
  STAR: Star,
  INFO: Info,
  DIRECTIONS_BUS: DirectionsBus,
  REQUEST_QUOTE: RequestQuote,
  EDIT: Edit,
  VISIBILITY: Visibility,
  SHARE: Share,
  WHATSAPP: Whatsapp,
  PICTURE_AS_PDF: PictureAsPdf,
  WINE_BAR: WineBar,
  WEST: West,
};

export const Icon: FunctionComponent<IconProps> = ({
  iconId,
  scale = 1,
  color,
}) => {
  if (!iconId) {
    return null;
  }

  const IconComponent = ICONS_SVG[iconId] || ICONS_SVG.UNKNOWN;

  return <IconComponent scale={scale} color={color} />;
};
