import Loading from "../../ui/Loading";
import TextFieldPro from "../../ui/TextFieldPro";

function SendOTPForm({ isSendingOtp, register, onSendOtp }) {
  return (
    <div className="py-28">
      <form className="space-y-4" onSubmit={onSendOtp}>
        <TextFieldPro
          name="phoneNumber"
          register={register}
          label="شماره موبایل"
        />

        <div>
          {isSendingOtp ? (
            <Loading />
          ) : (
            <button type="submit" className="btnConfirm">
              ارسال کد تایید
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default SendOTPForm;
