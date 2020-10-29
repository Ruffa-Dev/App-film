import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: '#003366',
    flexDirection: 'row',
  },
  icon: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    margin: 20,
  },
  iconReload: {
    justifyContent: 'flex-start',
    marginTop: 28,
    marginLeft: 10,
    width: 50,
    height: 40,
  },
  box: {
    flex: 1,
  },
});

export default styles;
