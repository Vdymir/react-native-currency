import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';

const withNavigator = (Component: React.ElementType) =>
  function WrapperChildren(props: any) {
    const navigation = useNavigation<NativeStackNavigationProp<any, any>>();
    function handleBack() {
      navigation.goBack();
    }
    function handleGoTo(route: string, params?: any) {
      navigation.push(route, params);
    }

    function handleNavigate(route: string, params?: any) {
      navigation.navigate(route, params);
    }
    return (
      <>
        <Component
          {...props}
          navigateTo={handleNavigate}
          goTo={handleGoTo}
          goBack={handleBack}
        />
      </>
    );
  };
export default withNavigator;
