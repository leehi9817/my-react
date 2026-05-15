import "./App.css";

import withConditionalCard from "./card/withConditionalCard";
import SimpleCard from "./card/SimpleCard";

const ConditionalSimpleCard = withConditionalCard(SimpleCard);

const App = () => (
  <>
    <ConditionalSimpleCard
      title="Active Card"
      content="This card is active."
      disabled={false}
    />

    <ConditionalSimpleCard
      title="Disabled Card"
      content="This card is disabled."
      disabled={true}
    />
  </>
);

export default App;
