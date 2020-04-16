
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    cardContainer: {
        paddingHorizontal: 10,
        paddingVertical: 2,
        overflow: 'hidden',
    },
    contentContainer: {
        paddingVertical: 4,
        paddingHorizontal: 10,
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        borderRadius: 4,
    },
    pressedContentContainer: {
        paddingVertical: 4,
        paddingHorizontal: 10,
        backgroundColor: '#ffffff',
        flexDirection: 'column',
        shadowColor: '#808080',
        shadowOffset: { width: 8, height: 8 },
        shadowOpacity: 1,
        shadowRadius: 8,
        elevation: 4,
        borderRadius: 4,
    },
    imageContainer: {
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderRadius: 4,
        backgroundColor: '#000000',
    },
    pressedImageContainer: {
        backgroundColor: '#000000',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 80,
        alignItems: 'flex-end'
    },
    tickImage: {
        height: 30,
        width: 30,
        bottom: 0,
        marginRight: 10,
        top: 70
    },
    textContainer: {
        paddingHorizontal: 10,
        justifyContent: 'center',
        flexDirection: 'column'
    },
    pressedTextContainer: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        justifyContent: 'center',
        flexDirection: 'column'
    },
    headingText: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    subheadingText: {
        fontSize: 12,
    }
})
