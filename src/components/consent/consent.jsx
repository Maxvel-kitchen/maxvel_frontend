import style from "./consent.module.css";
import Title from "../title/title";

function Consent() {
  return (
    <div className={style.container}>
      <Title title="CONSENT TO PERSONAL DATA PROCESSING" />
      <p>
        I, give MAXVEL LIMITED, a company incorporated under the laws of Cyprus
        under registration number: HE 429460, having its registered office at
        Panteli Katelari 13, house 4, 7040, Oroklini, Larnaca, Cyprus
        (hereinafter referred to as the “Company”), my consent to my personal
        data processing, namely: full name, address, contact data and other data
        available to the Company which includes performance of actions by any
        available means (including automated and non-automated processing) with
        my personal data, including: collection, systematization, accumulation,
        storage, specification (updating, changing), use, transfer (provision,
        access) to their employees and other persons authorized by them,
        destruction for the purpose of service provision by the Company,
        including enter the data on me into the databased of the Company, as
        potential consumer of their services.
      </p>
      <p>
        To this end, I consent to sending me the advertisement and/or
        information materials on the existing and new services of the Company
        using the communication means, including by telecommunication networks,
        by phone, fax and mobile wireless communication (including SMS), via
        Internet.
      </p>
      <p>
        This consent shall take effect from the date of its execution and shall
        be valid for 5 years upon this consent provision. This consent may be
        revoked by me at any time by sending a respective written notice to the
        Company, in which case the Company shall cease to process my personal
        data within 5 days.
      </p>
    </div>
  );
}

export default Consent;
