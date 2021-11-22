let calcKalo = () => {
  let kGroesse = document.getElementById("kGroesse").value;
  let kAlter = document.getElementById("kAlter").value;
  let kGewicht = document.getElementById("kGewicht").value;
  let kKoeBauMan = document.getElementById("kKoeBauMan");
  let kKoeBauWomen = document.getElementById("kKoeBauWomen");
  let kAktivitaet = document.getElementById("kAktivitaet").value;
  let resultGrund = document.getElementById("resultGrund");
  let resultGesamt = document.getElementById("resultGrund");

  let result = 0;

  if (kKoeBauMan.checked) {
    result = 664.7 + 13.7 * kGewicht + 5 * kGroesse - 6.8 * kAlter;
  } else {
    result = 655.1 + 9.6 * kGewicht + 1.8 * kGroesse - 4.7 * kAlter;
  }

  console.log(result);

  if (kAktivitaet == "nur schlafen") {
    resultAll = result * 0.95;
  } else if (kAktivitaet == "nur sitzen oder liegend") {
    resultAll = result * 1.2;
  } else if (kAktivitaet == "Ausschließlich sitzend") {
    resultAll = result * 1.5;
  } else if (kAktivitaet == "meistens sitzend") {
    resultAll = result * 1.7;
  } else if (kAktivitaet == "Ausschließlich stehend") {
    resultAll = result * 1.9;
  } else if (kAktivitaet == "körperlich anstrengend") {
    resultAll = result * 2.2;
  }

  resultGrund.innerHTML = Math.floor(result);
  resultGesamt.innerHTML = Math.floor(resultAll);
};
