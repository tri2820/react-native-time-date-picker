export function styles(theme: any): {
    container: {
        width: string;
        height: string;
        flexWrap: "wrap";
        left: number;
    };
    dayItem: {
        flex: number;
        margin: number;
        borderColor: any;
        alignItems: "center";
        justifyContent: "center";
    };
    dayTodayItem: {
        borderWidth: number;
        borderColor: any;
    };
    dayItemSelected: {
        backgroundColor: any;
    };
    dayText: {
        fontFamily: any;
        fontSize: any;
        color: any;
        textAlign: "center";
        width: string;
    };
    dayTextSelected: {
        color: any;
        fontFamily: any;
    };
    dayTextDisabled: {
        opacity: number;
    };
};
