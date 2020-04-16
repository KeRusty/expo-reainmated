
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
        flexDirection: 'row'
    },
    pressedContentContainer: {
        paddingVertical: 4,
        paddingHorizontal: 10,
        backgroundColor: '#ffffff',
        flexDirection: 'column',
        shadowColor: '#808080',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 2,
        shadowRadius: 4,
        elevation: 10
    },
    imageContainer: {
        paddingVertical: 20,
        paddingHorizontal: 20,
        backgroundColor: '#000000'
    },
    pressedImageContainer: {
        backgroundColor: '#000000',
        width: '100%',
        paddingVertical: 80,
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
