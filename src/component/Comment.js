// import React, { useState, useCallback } from 'react';
// import StephenASmith from '../assets/StephenASmith.png';
// import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// const Comment = (props) => {
//     const navigation = useNavigation();
//     const [textShown, setTextShown] = useState(false);
//     const [lengthMore, setLengthMore] = useState(false);
//     const toggleNumberOfLines = () => {
//         setTextShown(!textShown);
//         console.log(props)
//     }

//     const onTextLayout = useCallback(e => {
//         setLengthMore(e.nativeEvent.lines.length >= 4);
//     }, []);

//     return (
//         <View style={styles.container}>
//             <View style={styles.card}>
//                 <Image style={styles.imgBox} source={StephenASmith} />
//                 <View style={styles.textBox}>
//                     <Text style={styles.headerText}>
//                         Max Kellerman
//                     </Text>
//                     <Text style={styles.bodyText}
//                         onTextLayout={onTextLayout}
//                         numberOfLines={textShown ? undefined : 4}>
//                         I agree lol!
//                     </Text>
//                     {
//                         lengthMore ? <Text
//                             onPress={toggleNumberOfLines}
//                             style={styles.toggle}
//                         >{textShown ? 'Read Less' : 'Read More'}</Text>
//                             : null
//                     }
//                 </View>
//             </View>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     toggle: {
//         color: "#3D929A",
//         marginLeft: 10,
//     },
//     card: {
//         backgroundColor: '#242526',
//         width: 340,
//         minHeight: 120,
//         shadowColor: '#673939',
//         shadowOpacity: .1,
//         borderRadius: 1,
//         shadowRadius: 13,
//         flexDirection: 'row'
//     },
//     imgBox: {
//         width: 40,
//         height: 40,
//         left: 10,
//         top: 10,
//         borderRadius: 25
//     },
//     textBox: {
//         paddingTop: 20,
//         alignContent: 'space-between',
//         width: 280,
//         justifyContent: 'flex-start',
//         paddingLeft: 12
//     },
//     headerText: {
//         fontSize: 15,
//         fontWeight: 'bold',
//         color: '#ffffff',
//         paddingLeft: 10,
//     },
//     bodyText: {
//         fontSize: 12,
//         paddingLeft: 10,
//         paddingTop: 10,
//         color: '#ffffff'
//     },
//     button: {
//         width: 130,
//         height: 30,
//         backgroundColor: '#3D929A',
//         borderRadius: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//         left: 10,
//         position: 'relative',
//         bottom: 0,
//         marginTop: 5

//     },

//     buttonText: {
//         fontSize: 14,
//         color: '#ffffff',
//         fontWeight: 'bold'
//     },

// });


// export default Comment;