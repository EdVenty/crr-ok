import { createAction } from '@reduxjs/toolkit';
import lang from './ru_ru.json';

export enum EDisabledReason{
    none, hallOverlow, robotBroken, unknown
}

export const evalDisabledReason = (reason: EDisabledReason) => {
    switch(reason) {
        case EDisabledReason.hallOverlow:
            return lang['page.index.delivery-alert-message.overflow'];
        case EDisabledReason.robotBroken:
            return lang['page.index.delivery-alert-message.robot-broken'];
        case EDisabledReason.unknown:
            return lang['page.index.delivery-alery-message.unknown'];
        default:
            return lang['page.index.delivery-alery-message.unknown'];
    }
}

export const setDeliveryDisabledReason = createAction<EDisabledReason>('DELIVERY_DISABLED_RESON');
export const setDeliveryOff = createAction('DELIVERY_OFF');
export const setDeliveryOn = createAction('DELIVERY_ON');