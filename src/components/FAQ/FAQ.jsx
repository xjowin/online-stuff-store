import React from 'react';
import '../../styles/FAQ.css';

const FAQ = () => {
  return (
    <div className="FAQ-container">
      <h2>FAQs</h2>
      <table className="FAQ-table">
        <tbody>
          <tr>
            <th className="FAQ-th">Do you wholesale?</th>
            <td className="FAQ-td">
            Yes! Please contact us at <a href="https://mail.google.com/mail/u/0/#inbox?compose=jrjtXRHRKgdCmBqPSSmQwlcrKznZJqTmjqZtVBDbdXBxWKpfpFGTXPTCplsFqcMlvrLLGqCL" target="_blank" rel="noreferrer" style={{ textDecoration: "underline" }}>info@stuff.com</a> and we'll send you a copy of our latest line sheet.
            </td>
          </tr>
          <tr>
            <th className="FAQ-th">Do you accept returns or exchanges?</th>
            <td className="FAQ-td">
            All sale items are final sale and not eligible for returns.
            </td>
          </tr>
          <tr>
            <th className="FAQ-th">Do you ship internationally?</th>
            <td className="FAQ-td">
            Yes! International orders ship via the postal service. You may incur import duties or other customs fees depending on your country of residence.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}



export default FAQ;







