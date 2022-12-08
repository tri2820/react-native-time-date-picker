export class utils {
    constructor(props: any);
    minMaxDates: {
        minimumDate: any;
        maximumDate: any;
    };
    config: any;
    translationConfig: any;
    getFormatted: (date: any, formatName?: string) => any;
    getFormattedDate: (date: any, format?: string) => string;
    getTime: (time: any) => string;
    getToday: () => any;
    getMonthName: (month: any) => any;
    getConvertedNumber: (value: any) => any;
    getDate: (time: any) => moment.Moment;
    getMonthYearText: (time: any) => string;
    checkMonthDisabled: (time: any) => boolean;
    checkArrowMonthDisabled: (time: any, next: any) => boolean;
    checkYearDisabled: (year: any, next: any) => boolean;
    checkSelectMonthDisabled: (time: any, month: any) => boolean;
    validYear: (time: any, year: any) => any;
    getMonthDays: (time: any) => any[];
    useMonthAnimation: (activeDate: any, distance: any, onEnd: any) => (((type: any) => void) | {
        lastDate: any;
        shownAnimation: {
            opacity: Animated.AnimatedInterpolation;
            transform: {
                translateX: Animated.AnimatedInterpolation;
            }[];
        };
        hiddenAnimation: {
            opacity: Animated.Value;
            transform: {
                translateX: Animated.AnimatedInterpolation;
            }[];
        };
    })[];
}
