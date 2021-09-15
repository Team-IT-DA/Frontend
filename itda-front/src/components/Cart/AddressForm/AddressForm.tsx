import AddressFormModal from "./AddressFormModal";
const AddressForm = ({
  toggleAddressForm,
}: {
  toggleAddressForm: React.MouseEventHandler<SVGElement>;
}) => {
  return <>{<AddressFormModal toggleAddressForm={toggleAddressForm} />}</>;
};

export default AddressForm;
