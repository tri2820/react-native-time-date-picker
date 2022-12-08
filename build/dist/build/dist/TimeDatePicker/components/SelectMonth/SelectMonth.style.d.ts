export function styles(theme: any): {
    container: {
        position: "absolute";
        width: string;
        height: string;
        top: number;
        right: number;
        backgroundColor: any;
        borderRadius: number;
        flexDirection: "column";
        zIndex: number;
        justifyContent: "center";
        alignItems: "center";
    };
    header: {
        alignItems: "center";
        paddingHorizontal: number;
        justifyContent: "space-between";
        width: string;
        flexDirection: "row";
    };
    reverseHeader: {
        flexDirection: "row-reverse";
    };
    monthList: {
        flexWrap: "wrap";
        margin: number;
    };
    item: {
        width: string;
        marginHorizontal: string;
        paddingVertical: number;
        marginVertical: number;
        alignItems: "center";
    };
    selectedItem: {
        backgroundColor: any;
        borderRadius: number;
    };
    itemText: {
        fontFamily: any;
        fontSize: any;
        color: any;
    };
    selectedItemText: {
        color: any;
    };
    disabledItemText: {
        opacity: number;
    };
    arrowWrapper: {
        padding: number;
        position: "relative";
        zIndex: number;
        opacity: number;
    };
    disableArrow: {
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
    arrowDisable: {
        opacity: number;
    };
    yearInput: {
        fontSize: any;
        paddingVertical: number;
        paddingHorizontal: number;
        color: any;
        fontFamily: any;
        textAlignVertical: "center";
        minWidth: number;
        textAlign: "center";
    };
};
