export type TNavLink = {
    href?: string;
    title?: string;
    icon?: any;
}

export type TEventBox = {
    img: string, 
    title : string, 
    category : string, 
    description : string
}

export type TDayTiming = {
    days: string;
    timings: string[];
    eveningTimings?: string[]
};
