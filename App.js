import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from "./src/Components/Welcome";
import FaceScan from "./src/Components/FaceScan";
import AccountsEntry from "./src/Components/AccountsEntry";
import RegistrationHome from "./src/Components/RegistrationHome";
import MobileOTP from "./src/Components/MobileOTP";
import NavigationTab from "./src/Components/Navigation/NavigationTab";
import UserInfoEdit from "./src/Components/Home/UserInfoEdit";

import Antibody from './src/Components/Home/HomeComponents/Antibody/Antibody';

import PCR from "./src/Components/Home/HomeComponents/PCR/PCR";
import PCRPaymentMethod from "./src/Components/Home/HomeComponents/PCR/PCRPaymentMethod";
import PCRLeftDate from "./src/Components/Home/HomeComponents/PCR/PCRLeftDate";
import PCRTestStatus from './src/Components/Home/HomeComponents/PCR/PCRTestStatus';

import VaccineRegistration from "./src/Components/Home/HomeComponents/Vaccination/Vaccination";
import VaccineDateLeft from "./src/Components/Home/HomeComponents/Vaccination/vaccineLeftDate";
import VaccinePaymentMethod from "./src/Components/Home/HomeComponents/Vaccination/VaccinePaymentMethod";
import VaccinationStatus from './src/Components/Home/HomeComponents/Vaccination/VaccinationStatus';

import AddCountry from "./src/Components/Home/HomeComponents/AddCountry/AddCountry";
import Synchronise from "./src/Components/Home/HomeComponents/Synchronise";

import Booster from "./src/Components/Home/HomeComponents/Booster/Booster";
import BoosterDateLeft from "./src/Components/Home/HomeComponents/Booster/BoosterLeftDate";
import BoosterPaymentMethod from "./src/Components/Home/HomeComponents/Booster/BoosterPaymentMethod";
import BoosterStatus from './src/Components/Home/HomeComponents/Booster/BoosterStatus';
import Artboard from "./src/Components/Home/Artboard";
import VaccineRegistrationButton from "./src/Components/Home/HomeComponents/Vaccination/VaccineRegistrationButton";
import AlreadyTakeVaccine from "./src/Components/Home/HomeComponents/Vaccination/AlreadyTakeVaccine";
import Rtpcr from "./src/Components/Home/HomeComponents/Rtpcr/Rtpcr";
import RtpcrData from "./src/Components/Home/HomeComponents/Rtpcr/RtpcrData";
import RtpcLeftDate from "./src/Components/Home/HomeComponents/Rtpcr/RtpcLeftDate";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Login" component={AccountsEntry} />
        <Stack.Screen name="Registration" component={RegistrationHome} />
        <Stack.Screen name="Mobile OTP" component={MobileOTP} />
        <Stack.Screen name="Home" options={{title:"Home"}} component={NavigationTab} />
        <Stack.Screen name="Face Scan" component={FaceScan} />
        <Stack.Screen name="Personal Information" component={UserInfoEdit} />

        <Stack.Screen name="Antibody" component={Antibody} />

        <Stack.Screen name="PCR" component={PCR} />
        {/* <Stack.Screen name="PCR Payment Method" component={PCRPaymentMethod} /> */}
        <Stack.Screen name="PCR Date Status" component={PCRLeftDate} />
        <Stack.Screen name="PCR Test Status" component={PCRTestStatus} />

        <Stack.Screen name="Rtpcr Status" options={{ title: 'Rtpcr' }} component={RtpcLeftDate} />
        <Stack.Screen name="Rtpcr data" options={{ title: 'Rtpcr result' }} component={RtpcrData} />
        <Stack.Screen name="Rtpcr Registration Button" options={{ title: 'Rtpcr Registration' }} component={Rtpcr} />

        <Stack.Screen name="Vaccine Registration" component={VaccineRegistration} />
        {/* <Stack.Screen name="Vaccine Payment Method" component={VaccinePaymentMethod} /> */}
        <Stack.Screen name="Vaccine Date Status" component={VaccineDateLeft} />
        <Stack.Screen name="Vaccination Status" component={VaccinationStatus} />
        <Stack.Screen name="Vaccine Registration Button" options={{ title: 'Vaccine Registration' }} component={VaccineRegistrationButton} />
        <Stack.Screen name="Already TakeVaccine" options={{ title: 'About Your Health Record' }} component={AlreadyTakeVaccine} />

        <Stack.Screen name="Add Country" component={AddCountry} />
        <Stack.Screen name="Synchronise" component={Synchronise} />

        <Stack.Screen name="Booster" component={Booster} />
        <Stack.Screen name="Booster Date Status" component={BoosterDateLeft} />
        {/* <Stack.Screen name="Booster Payment Method" component={BoosterPaymentMethod} /> */}
        <Stack.Screen name="Booster Status" component={BoosterStatus} />
        <Stack.Screen name="Artboard" component={Artboard} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
