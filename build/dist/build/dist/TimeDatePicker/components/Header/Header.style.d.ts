export function styles(theme: any): {
    container: {
        alignItems: "center";
        flexDirection: "row-reverse";
    };
    reverseContainer: {
        flexDirection: "row";
    };
    arrowWrapper: {
        padding: number;
        position: "relative";
        zIndex: number;
        opacity: number;
    };
    arrow: {
        width: number;
        height: number;
        opacity: number;
        tintColor: any;
        margin: number;
    };
    leftArrow: {
        transform: {
            rotate: string;
        }[];
    };
    disableArrow: {
        opacity: number;
    };
    monthYearContainer: {
        flex: number;
        position: "relative";
        alignItems: "center";
        justifyContent: "center";
    };
    monthYear: {
        position: "absolute";
        alignItems: "center";
        flexDirection: "row-reverse";
    };
    reverseMonthYear: {
        flexDirection: "row";
    };
    activeMonthYear: {
        zIndex: number;
    };
    monthYearWrapper: {
        alignItems: "center";
    };
    headerText: {
        fontSize: any;
        padding: number;
        color: any;
        fontFamily: any;
        fontWeight: "500";
        textAlignVertical: "center";
    };
    monthText: {
        fontFamily: any;
    };
    centerWrapper: {
        borderColor: any;
        paddingVertical: number;
        paddingHorizontal: number;
        alignItems: "center";
        borderRadius: number;
        borderWidth: number;
    };
    time: {
        marginRight: number;
    };
};
