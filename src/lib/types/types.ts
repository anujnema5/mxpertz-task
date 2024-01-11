export type TNavLink = {
    href?: string;
    title?: string;
    icon?: any;
    id?: string
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

export type Review = {
    rating: number;
    title: string;
    description: string;
    tag: string;
};

export type FoodItem = {
    price: string;
    title: string;
    description: string;
};

export type FoodImage = {
    img: string;
};

export type FoodShowCaseItem = FoodItem | FoodImage;

