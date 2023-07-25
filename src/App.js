import SForms from "@kbss-cvut/s-forms";

import form1 from "./forms/example_form.json";
import { Constants } from "@kbss-cvut/s-forms";
import "../node_modules/@kbss-cvut/s-forms/dist/s-forms.css";
import possibleValues from "./forms/possibleValues.json";
import "../node_modules/intelligent-tree-select/lib/styles.css";
import "../node_modules/s-forms-components/dist/s-forms-components.css";
import SmartComponents from "s-forms-components";

const modalProps = {
  show: true,
  title: "Title",
};

const fetchTypeAheadValues = () => {
  return new Promise((resolve) =>
    setTimeout(() => resolve(possibleValues), 1500)
  );
};
/*
const getP = (queryParameterName, defaultValue) => {
  return {
    [queryParameterName]: getQueryParameter(queryParameterName, defaultValue),
  };
};

const getQueryParameter = (parameterName, defaultValue) => {
  const value = queryString.parse(window.location.search)[parameterName];
  if (value) {
    return value;
  }
  return defaultValue;
};*/

const options2 = {
  i18n: {
    "wizard.next": "Next",
    "wizard.previous": "Previous",
    "section.expand": "Expand",
    "section.collapse": "Collapse",
  },
  intl: {
    locale: "cs",
  },
  modalView: false,
  modalProps,
  horizontalWizardNav: true,
  wizardStepButtons: true,
  enableForwardSkip: true,
  //...getP("startingQuestionId", "layout-options-65"),
  startingStep: 1,
  debugMode: false,
  users: [
    { id: "http://fel.cvut.cz/people/max-chopart", label: "Max Chopart" },
    {
      id: "http://fel.cvut.cz/people/miroslav-blasko",
      label: "Miroslav Blasko",
    },
  ],
  currentUser: "http://fel.cvut.cz/people/max-chopart",
  icons: [
    {
      id: Constants.ICONS.QUESTION_HELP,
      behavior: Constants.ICON_BEHAVIOR.ON_HOVER,
    },
    {
      id: Constants.ICONS.QUESTION_LINK,
      behavior: Constants.ICON_BEHAVIOR.ON_HOVER,
    },
    {
      id: Constants.ICONS.QUESTION_COMMENTS,
      behavior: Constants.ICON_BEHAVIOR.ON_HOVER,
    },
  ],
};

function App() {
  return (
    <SForms
      form={form1}
      options={options2}
      componentMapRules={SmartComponents.getComponentMapping()}
      fetchTypeAheadValues={fetchTypeAheadValues}
    />
  );
}

export default App;
