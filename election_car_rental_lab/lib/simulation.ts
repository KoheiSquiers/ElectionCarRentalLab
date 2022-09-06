interface SimulationProps {
  inputValue: any;
}


const Simulation = (
  {
    inputValue,
  }
    : SimulationProps,
) => {
  const electoralClassValue = 100;
  const electionAreaValue = 100;
  const parliamentClassValue = 100;
  const carClassValue = 100;
  const signalLightValue = 100;
  const ampSizeValue = 100;
  const speakerValue = 100;
  const wirelessMikeValue = 100;
  const wirelessMikeNumberValue = 100;
  const sdValue = 100;
  const wirelessIncomeValue = 100;
  const handSpeakerValue = 100;
  const bodyRappingValue = 100;

  const subTotalPrice = 100;
  const optionTotalPrice = 100;
  const totalPrice = 100;

  return {
    subTotalPrice: subTotalPrice,
    optionTotalPrice: optionTotalPrice,
    totalPrice: totalPrice,
  };
};

export default Simulation;
