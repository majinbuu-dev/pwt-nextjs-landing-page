import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Service Payment Policy | PwT Tech Solutions',
};

const CONTENT = `
                    <p className="text-gray-600 mb-4"><strong className="font-semibold text-gray-900">Effective Date:</strong> December 01, 2025</p>
                    
                    <p className="text-gray-600 mb-4">This Service Payment Policy ("Policy") is issued by PwT TECH SOLUTIONS COMPANY LIMITED - PwT, including its subsidiaries and affiliated entities (collectively, "PwT", "We", "Our", or "Us", unless the context requires otherwise). This Policy governs the payment terms and conditions for services provided by PwT and applies to all Clients ("Client", "You", or "Your") engaging Our services.</p>
                    
                    <p className="text-gray-600 mb-4">By agreeing to make any payment against an invoice issued by PwT, the Client acknowledges and agrees to be bound by the terms of this Policy.</p>
                    
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Service Fees and Commencement of Services</h2>
                    <p className="text-gray-600 mb-4">All service fees provided by PwT, whether through quotations or published materials, are indicative and subject to adjustment based on the scope, scale, and specific requirements of each engagement. Final service fees and payment terms will be communicated through an official invoice issued by PwT.</p>
                    
                    <p className="text-gray-600 mb-4">Services will commence only after full payment of the respective invoice has been received, unless otherwise agreed in writing. The standard payment currency is United States Dollars (USD). Requests for payment in other currencies, such as SGD, VND, AUD, or CAD, will be considered on a case-by-case basis, with PwT providing applicable conversion details and instructions.</p>
                    
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Payment Terms, Methods, and Invoicing</h2>
                    <p className="text-gray-600 mb-4">Following the confirmation of services, PwT will issue an invoice based on the agreed scope of work. Each invoice will clearly specify the applicable fees, currency of payment, and the due date. Where additional or out-of-scope services are requested, separate invoices will be issued promptly upon mutual agreement between PwT and the Client.</p>
                    
                    <p className="text-gray-600 mb-4">To facilitate payment, PwT accepts a variety of methods, including domestic and international bank transfers, credit or debit card payments via secure links (provided upon request), and other alternatives subject to prior written approval. All relevant payment details, such as bank account information and reference format, will be included in the invoice to ensure accuracy and traceability.</p>
                    
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Third-Party Payments and Advances</h2>
                    <p className="text-gray-600 mb-4">Certain services may require payments to third-party vendors or media owners. In such cases, PwT will inform the Client in advance and issue an invoice covering any required advances or deposits.</p>
                    
                    <p className="text-gray-600 mb-4">If a third party imposes late submission charges or similar fees on PwT, and such charges are not due to PwT's negligence or intentional acts, the Client agrees to reimburse PwT promptly upon presentation of the corresponding invoice.</p>
                    
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Late Payment and Service Suspension</h2>
                    <p className="text-gray-600 mb-4">Timely payment is crucial for uninterrupted service delivery. Invoices not settled by their due dates may result in:</p>
                    <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                        <li>Suspension of ongoing or scheduled services;</li>
                        <li>Reallocation of resources previously assigned to the Client;</li>
                        <li>Reassessment and adjustment of payment terms.</li>
                    </ul>
                    <p className="text-gray-600 mb-4">Services will only resume after full settlement of outstanding balances, unless otherwise agreed in writing.</p>
                    
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Termination and Outstanding Payments</h2>
                    <p className="text-gray-600 mb-4">Upon termination of services by either party, the Client is responsible for:</p>
                    <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                        <li>Settling all outstanding fees incurred up to the termination date;</li>
                        <li>Reimbursing any third-party costs committed by PwT on behalf of the Client;</li>
                        <li>Covering any non-refundable fees as outlined below.</li>
                    </ul>
                    
                    <p className="text-gray-600 mb-4">PwT may, at its sole discretion, issue refunds for service fees previously paid, subject to the terms set forth in the Refund Policy currently published on Our website, from time to time.</p>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Non-Refundable Fees</h3>
                    <p className="text-gray-600 mb-4">Unless otherwise stated, the following fees are non-refundable:</p>
                    <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                        <li>Initial deposits;</li>
                        <li>Costs associated with pre-production and creative development;</li>
                        <li>Services or deliverables already provided prior to cancellation.</li>
                    </ul>
                    
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Taxes and Other Applicable Charges</h2>
                    <p className="text-gray-600 mb-4"><strong className="font-semibold text-gray-900">(a) Taxes:</strong> All fees are exclusive of any applicable goods and services tax (GST), value-added tax (VAT), sales tax, or other governmental charges, which shall be borne by the Client.</p>
                    
                    <p className="text-gray-600 mb-4"><strong className="font-semibold text-gray-900">(b) Bank/Transaction Charges:</strong> Clients are responsible for any bank transfer fees, credit card surcharges, or other payment processing costs incurred in connection with their payments.</p>
                    
                    <div class="bg-gray-900 rounded-lg p-6 mt-8">
                        <h3 class="text-xl font-bold text-white mb-4">Contact Information</h3>
                        <p class="text-gray-300 mb-4">If you have any questions about this Policy, please contact us using the following details:</p>
                        <p class="text-gray-300 mb-4">PwT TECH SOLUTIONS COMPANY LIMITED - PwT</p>
                        <p class="text-gray-300 mb-4">
                            <strong class="font-semibold text-white">Email:</strong> contact@pwttech.com<br />
                            <strong class="font-semibold text-white">Address:</strong> 114 WASHINGTON BLVD STE C, 90292
                        </p>
                    </div>
                `;

export default function Page() {
  return (
    <>
      <Header />
      <main className="bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Service Payment Policy</h1>
          <p className="text-sm text-gray-500 mb-10">Last updated: March 15, 2026</p>
          <div className="prose prose-gray max-w-none" dangerouslySetInnerHTML={{__html: CONTENT}} />
        </div>
      </main>
      <Footer />
    </>
  );
}
