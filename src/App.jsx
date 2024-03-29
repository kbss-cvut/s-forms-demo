import SForms from "@kbss-cvut/s-forms";

import form1 from "./forms/example_form.json";
import { Constants } from "@kbss-cvut/s-forms";
import possibleValues from "./forms/possibleValues.json";
import { IntlContextProvider } from "@kbss-cvut/s-forms";
import queryString from "query-string";

import "@kbss-cvut/s-forms/css"
import "bootstrap/dist/css/bootstrap.min.css"
import "react-datepicker/dist/react-datepicker.css";

const modalProps = {
  show: true,
  title: "Title",
};

const fetchTypeAheadValues = () => {
  return new Promise((resolve) =>
    setTimeout(() => resolve(possibleValues), 1500)
  );
};

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
};

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
  ...getP("startingQuestionId", "layout-options-65"),
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
    <IntlContextProvider locale={options2.intl.locale}>
      <SForms
        form={form1}
        options={options2}
        fetchTypeAheadValues={fetchTypeAheadValues}
      />
    </IntlContextProvider>
  );
}

export default App;