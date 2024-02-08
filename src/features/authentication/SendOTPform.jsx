import TextField from "../../ui/TextField";
import Loading from "../../ui/Loading";

function SendOTPform({ onSubmit, phoneNumber, onChange, isSendingOTP }) {
  return (
    <div>
      <form onSubmit={onSubmit} className="space-y-8">
        <TextField
          name="phoneNumber"
          value={phoneNumber}
          onChange={onChange}
          label="شماره موبایل"
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
