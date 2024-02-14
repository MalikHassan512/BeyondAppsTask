import { StyleSheet } from "react-native";
import { FontSize, wp, hp, Colors } from '../../constants';


const styles = StyleSheet.create({
    card: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: Colors.white,
      shadowColor: Colors.black,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      padding: 10,
      marginHorizontal: 10,
      marginVertical: 3,
      borderRadius: 8,
    },
    image: {
      width: wp(30),
      height: hp(10),
      borderRadius: wp(4),
    },
    detailsContainer: {
      width: wp(50),
      marginLeft: 10,
    },
    itemName: {
      fontSize: FontSize.large,
      marginBottom: 5,
      fontWeight: 'bold',
    },
    itemDetail: {
      fontSize: FontSize.small,
      color: Colors.detailText,
    },
    iconContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  
export default styles;