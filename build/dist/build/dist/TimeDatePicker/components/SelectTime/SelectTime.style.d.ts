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
        justifyContent: "center";
        zIndex: number;
    };
    row: {
        flexDirection: "column";
        alignItems: "center";
        marginVertical: number;
    };
    title: {
        fontSize: any;
        color: any;
        fontFamily: any;
        marginBottom: number;
    };
    listItem: {
        height: number;
        alignItems: "center";
        justifyContent: "center";
    };
    listItemText: {
        fontSize: any;
        color: any;
        fontFamily: any;
    };
    footer: {
        flexDirection: "row";
        justifyContent: "center";
        marginTop: number;
    };
    button: {
        paddingVertical: number;
        paddingHorizontal: number;
        borderRadius: number;
        backgroundColor: any;
        margin: number;
    };
    btnText: {
        fontSize: any;
        color: any;
        fontFamily: any;
    };
    cancelButton: {
        backgroundColor: any;
    };
};
