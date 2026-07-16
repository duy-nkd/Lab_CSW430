import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        justifyContent: "flex-end",
        paddingHorizontal: 20,
        paddingBottom: 20,
    },

    displayContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    displayText: {
        fontSize: 64,
        fontWeight: "300",
        color: "#333",
    },

    keypad: {
        paddingBottom: 10,
    },

    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 16,
    },

    button: {
        width: 72,
        height: 72,
        borderRadius: 36,
        backgroundColor: "#F5F5F5",
        justifyContent: "center",
        alignItems: "center",

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.15,
        shadowRadius: 3,

        elevation: 4,
    },

    zeroButton: {
        width: 160,
        height: 72,
        borderRadius: 36,
        backgroundColor: "#F5F5F5",
        justifyContent: "center",
        alignItems: "center",

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.15,
        shadowRadius: 3,

        elevation: 4,
    },

    equalButton: {
        backgroundColor: "#FF9800",
    },

    clearRow: {
        alignItems: "center",
        marginTop: 10,
    },

    clearButton: {
        width: 320,
        height: 55,
        borderRadius: 28,
        backgroundColor: "#F5F5F5",
        justifyContent: "center",
        alignItems: "center",

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.15,
        shadowRadius: 3,

        elevation: 4,
    },

    textNum: {
        fontSize: 26,
        color: "#333",
    },

    textOp: {
        fontSize: 30,
        color: "#FF9800",
        fontWeight: "bold",
    },

    textEqual: {
        fontSize: 30,
        color: "#FFFFFF",
        fontWeight: "bold",
    },
});

export default styles;