import OpsNav from './components/OpsNav.jsx';
import OpsConsole from './components/OpsConsole.jsx';
import OpsSystems from './components/OpsSystems.jsx';
import OpsRegions from './components/OpsRegions.jsx';
import OpsPractice from './components/OpsPractice.jsx';
import Ops3am from './components/Ops3am.jsx';
import OpsProof from './components/OpsProof.jsx';
import OpsContact from './components/OpsContact.jsx';
import OpsFooter from './components/OpsFooter.jsx';

export default function Operations() {
  return (
    <div className="dir-ops">
      <OpsNav />
      <OpsConsole />
      <OpsSystems />
      <OpsRegions />
      <OpsPractice />
      <Ops3am />
      <OpsProof />
      <OpsContact />
      <OpsFooter />
    </div>
  );
}
