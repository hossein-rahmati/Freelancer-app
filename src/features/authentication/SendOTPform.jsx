import TextField from "../../ui/TextField";
import Loading from "../../ui/Loading";

// eslint-disable-next-line react/prop-types
function SendOTPform({ onSubmit, isSendingOTP, register }) {
  return (
    <div>
      <form onSubmit={onSubmit} className="space-y-8">
        <TextField
          name="phoneNumber"
          label="شماره موبایل"
          register={register}
        />
        <div>
          {isSendingOTP ? (
            <Loading />
          ) : (
            <button type="submit" className="btn btn--primary w-full">
              ارسال کد تایید
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default SendOTPform;
