import { StyleSheet } from "react-native";

export const colores = {
    primary: '#5856d6',
    
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: 'yellow',
        paddingHorizontal: 10,
        paddingVertical: 15
    },
    title: {
        fontSize: 30,
        marginBottom: 15
    },
    botonStyle: {
        width: 120,
        height: 45,
        backgroundColor: 'orange',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25,
    },
    textButton: {
        color: 'white',
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },
    avatarContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 15
    },
    imagenStyle:  {
        height: 65,
        width: 65,
        borderRadius: 65
    },
    optionsContainer: {
        marginTop: 15,
        //backgroundColor: 'yellow',
        marginHorizontal: 20
    },
    buttonStyleNav: {
        paddingVertical: 10
    },
    textoButtonNav: {
        fontSize: 17,
        fontWeight: 'bold'
    }
})