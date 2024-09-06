function ConfirmDelete({ resourceName, onClose, disabled, onDeleteConfirm }) {
  return (
    <div>
      <h2 className="font-bold text-base mb-8">    
        آیا از حذف {resourceName} مطمئن هستید؟
      </h2>
      <div className="flex items-center justify-around gap-x-8">
        <button
          onClick={onClose}
          disabled={disabled}
          className="px-4 py-3 border border-primary-700 text-primary-700 hover:text-primary-900 shadow-lg shadow-primary-300 dark:shadow-primary-200 flex-1 rounded-xl"
        >
          لغو
        </button>
        <button
          onClick={onDeleteConfirm}
          disabled={disabled}
          className="px-4 py-3 border border-rose-700 text-rose-700 hover:text-rose-900 shadow-lg shadow-primary-300 dark:shadow-rose-200 flex-1 rounded-xl"
        >
          تایید
        </button>
      </div>
    </div>
  );
}

export default ConfirmDelete;
