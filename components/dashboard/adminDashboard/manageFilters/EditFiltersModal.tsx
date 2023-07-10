interface EditFiltersModalProps {
  cancel: () => void;
}

export default function EditFiltersModal({ cancel }: EditFiltersModalProps) {
  return (
    <div>
      {/* SearchBar */}
      {/* Clickable results
    Delete or Edit */}
      <button onClick={cancel}>Anuler</button>
    </div>
  );
}
