'use strict';

import * as log from '../util/logging';

export interface Analytics {

    init();

    track(eventName: string, params?:{[index:string]:any}, callback?:() => void):void;

    trackLinks(querySelector:string, eventName:string, params?:{[index:string]:any}):void;

    trackForms(querySelector:string, eventName:string, params?:{[index:string]:any}):void
}

class AnalyticsImpl implements Analytics {

    constructor() {

    }

    init() {

    }

    track(eventName: string, params?:{[index:string]:any}, callback?:() => void):void {
       
    }

    trackLinks(querySelector:string, eventName:string, params?:{[index:string]:any}):void {

    }

    trackForms(querySelector:string, eventName:string, params?:{[index:string]:any}):void {

    }
}

export function init(): Analytics {
    return new AnalyticsImpl();
}