import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Payment Refund Policy | PwT Tech Solutions',
};

const CONTENT = `
                    <p className="text-gray-600 mb-4"><strong className="font-semibold text-gray-900">Effective Date:</strong> December 01, 2025</p>
                    
                    <p className="text-gray-600 mb-4">REGARDING PAYMENT REIMBURSEMENTS UPON DELIVERY FAILURE.</p>
                    
                    <p className="text-gray-600 mb-4">This Payment Refund Policy ("Policy") is issued by PwT TECH SOLUTIONS COMPANY LIMITED - PwT, including its subsidiaries and affiliated entities (collectively, "PwT", "We", "Our", or "Us", unless the context requires otherwise). This Policy governs all refund matters related to payments made for services offered by PwT ("Services") and applies to all Clients ("Client", "You", or "Your") engaging Our Services.</p>
                    
                    <p className="text-gray-600 mb-4">By agreeing to make any payment against an invoice issued by PwT, the Client acknowledges and agrees to be bound by the terms of this Policy.</p>
                    
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">1. General Refund Eligibility</h2>
                    <p className="text-gray-600 mb-4">PwT considers all refund requests individually and may issue a full or partial refund under specific circumstances. To be considered for a refund, the following conditions must be met:</p>
                    <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                        <li>The Services have not been initiated or fully completed by PwT or any relevant third-party service provider;</li>
                        <li>The Services requested are not among the non-refundable circumstances outlined in Section 2 of this policy; and</li>
                        <li>The Services can be cancelled without incurring any payment or penalty from a third-party service provider.</li>
                    </ul>
                    
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Non-Refundable Circumstances</h2>
                    <p className="text-gray-600 mb-4">The Client understands and agrees that there are certain circumstances under which payments made are non-refundable, regardless of whether the Services have commenced or are in progress. This is due to the nature of the Services and the time, effort, resources, and external factors involved in their provision. Such circumstances include, but are not limited to, the following:</p>
                    
                    <p className="text-gray-600 mb-4">Your order(s) include following Services:</p>
                    <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                        <li>Website development, brand identity package, or design materials;</li>
                        <li>Technical Strategic consulting, or discovering and planning sessions;</li>
                        <li>Any other services of a similar nature that either (i) require advance payment to third-party service providers; and/or (ii) involve the use of resources—such as working hours, labor, effort, or materials—that cannot be reasonably quantified for the purpose of issuing a refund in the event of non-delivery.</li>
                    </ul>
                    
                    <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                        <li>Your payment have been applied with a discount rate from PwT;</li>
                        <li>Any failure or delay on Your part in cooperating with PwT in the provision of the Services. This includes, but is not limited to:
                            <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                                <li>Failing to promptly provide necessary documents or information required for the implementation of the Services;</li>
                                <li>Failing to respond to or provide feedback within the agreed-upon timeframe.</li>
                            </ul>
                        </li>
                        <li>Any breach of Your obligations under the Terms of Service Agreement published on Our website, regardless of any loss or damage incurred, and shall be without prejudice to Our right to seek compensation or indemnification for such loss or damage;</li>
                        <li>In the event that potential payment fraud or unethical conduct is identified.</li>
                    </ul>
                    
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Fees Deducted From Refund Amount</h2>
                    <p className="text-gray-600 mb-4">Where a refund is issued, the following fees are deducted from the Client's original payment in order to calculate the refund, depending on the specific case:</p>
                    <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                        <li><strong className="font-semibold text-gray-900">Transaction Processing Fee:</strong> A fee that is automatically deducted by the respective payment method. This fee applies to all refund cases and may vary depending on the payment method used.</li>
                        <li><strong className="font-semibold text-gray-900">Refund Request Fee:</strong> A fixed administrative fee applies when the Client unilaterally initiates a refund request.</li>
                    </ul>
                    
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Refund Process</h2>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">4.1. In the event the Client initiates a refund request:</h3>
                    <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                        <li>The Client submits the request in writing to the official support email at contact@pwttech.com within (07) business days of the original service purchase;</li>
                        <li>The Client includes all relevant information, such as the service order reference, reason for the request, and proof of payment;</li>
                        <li>PwT will evaluate the request and may contact the Client for additional details;</li>
                        <li>If the request is approved by PwT, the amount of refund will be informed to the Client and will be processed within 10-15 business days since the day of approval from PwT.</li>
                    </ul>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4">4.2. In the event PwT initiates the refund request:</h3>
                    <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                        <li>PwT shall send a notice of refund and the amount to be refunded to the Client in writing;</li>
                        <li>Upon the Client's written reply and confirmation of such Notice within seven (07) business days of receipt, the refund will be processed within 10-15 business days.</li>
                    </ul>
                    
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Method and Timeline of Refunds</h2>
                    <p className="text-gray-600 mb-4">The refund will be issued to the same payment method originally used by the Client. If that payment method is unavailable, an alternative method may be used, provided that the beneficiary is the same individual or entity, or is officially authorized by them to receive the refund.</p>
                    
                    <p className="text-gray-600 mb-4">We do not control the timeframe for the refunded amount to appear in the beneficiary's account. This timing is subject to the payment provider's policies and may take anywhere from five (05) business days up to a full billing cycle, or longer depending on the circumstances.</p>
                    
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Finality of Refund</h2>
                    <p className="text-gray-600 mb-4">Once a refund has been duly processed and issued in accordance with the terms set forth in this Policy, such refund shall be deemed final, conclusive, and binding upon both PwT and the Client. The Client expressly acknowledges and agrees that upon issuance of the refund, no further disputes, claims, chargebacks, reversals, or demands related to that transaction shall be made against PwT. The Client irrevocably waives any right to contest or seek additional compensation beyond the refunded amount.</p>
                    
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Changes to This Policy</h2>
                    <p className="text-gray-600 mb-4">PwT reserves the right to modify this Policy at any time. Any updates will be posted on the website and are effective upon publication.</p>
                    
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
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Payment Refund Policy</h1>
          <p className="text-sm text-gray-500 mb-10">Last updated: March 15, 2026</p>
          <div className="prose prose-gray max-w-none" dangerouslySetInnerHTML={{__html: CONTENT}} />
        </div>
      </main>
      <Footer />
    </>
  );
}
