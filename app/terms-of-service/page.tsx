import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Service Terms and Conditions | PwT Tech Solutions',
};

const CONTENT = `
        <div class="md:rounded-lg md:shadow-lg md:p-8">
            <h1 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Service Terms and Conditions</h1>
            <p className="text-gray-600 mb-4">SERVICE AGREEMENTS FOR CLIENTS.</p>
            <p className="text-gray-600 mb-4">Effective Date: Dec 01, 2025 (UTC+07:00)</p>
            <div class="prose prose-gray max-w-none">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. General Introduction</h2>
                <p className="text-gray-600 mb-4">
                    PwT TECH SOLUTIONS COMPANY LIMITED - PwT, together with its subsidiaries and affiliated entities, collectively referred to as "PwT", "we", "our", or "us", unless the context requires otherwise, is a provider of integrated marketing and digital communication solutions.
                </p>
                <p className="text-gray-600 mb-4">
                    These Service Terms and Conditions (the "Terms") set out the terms, conditions, and policies governing your use of our services and define the rights and obligations of both parties when you engage with PwT TECH SOLUTIONS COMPANY LIMITED - PwT. By accessing or using our services or platform, you acknowledge that you have read, understood, and agreed to comply with these Terms, as well as any additional policies or documents published by us.
                </p>
                <p className="text-gray-600 mb-4">
                    PwT TECH SOLUTIONS COMPANY LIMITED - PwT reserves the right to amend or update these Terms and related policies at any time by posting them on our website. Any such updates will become effective immediately upon publication without prior notice or consent.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Applicability</h2>
                <p className="text-gray-600 mb-4">
                    These Terms apply to all individuals and organizations (collectively referred to as "Client", "you", or "your") who:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                    <li>Access, browse, or interact with our website or any of our digital platforms ("Platform")</li>
                    <li>Use or receive any services or products provided by PwT TECH SOLUTIONS COMPANY LIMITED - PwT ("Services")</li>
                </ul>
                <p className="text-gray-600 mb-4">
                    By doing any of the above, you agree to be legally bound by these Terms and any referenced documents or policies. If you engage us through a proposal, quotation, invoice, or service plan, the terms in those documents will be read together with these Terms to form the binding Agreement between you and PwT TECH SOLUTIONS COMPANY LIMITED - PwT.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Scope of Services</h2>
                <p className="text-gray-600 mb-4">
                    PwT TECH SOLUTIONS COMPANY LIMITED - PwT consults and provides end-to-end website design and development, and related marketing and technical services to help businesses grow their online presence and accelerate their business success journey. The Services offered by PwT TECH SOLUTIONS COMPANY LIMITED - PwT may include, but are not limited to, the following categories:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                    <li>Website design and development</li>
                    <li>Custom industry-specific website solutions</li>
                    <li>Custom Web Portal Development</li>
                    <li>API Development & Integration Services</li>
                    <li>Cloud‑Based Web Application Development</li>
                    <li>CMS Development Solutions</li>
                    <li>Data Analytics Dashboards</li>
                    <li>AI Integration</li>
                    <li>Brand identity and graphic design services</li>
                    <li>Content creation and marketing services</li>
                    <li>Email marketing campaigns</li>
                    <li>Ongoing website support and maintenance</li>
                </ul>
                <p className="text-gray-600 mb-4">
                    The exact scope of services to be provided under any specific engagement will be detailed in the Proposal or quotation issued by PwT TECH SOLUTIONS COMPANY LIMITED - PwT and accepted by the Client. PwT TECH SOLUTIONS COMPANY LIMITED - PwT reserves the right to modify, update, or discontinue any portion of its Services at its sole discretion, subject to prior notice where applicable.
                </p>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Client Obligations</h2>
                <p className="text-gray-600 mb-4">
                    Your cooperation is essential to the successful delivery of our Services. By engaging PwT TECH SOLUTIONS COMPANY LIMITED - PwT, you acknowledge and agree to fulfill the following obligations throughout the course of our engagement.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4">4.1 Acceptable Conduct and Cooperation</h3>
                <p className="text-gray-600 mb-4">You agree to:</p>
                <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                    <li>Use our Services and any deliverables ("Work Product") only for lawful purposes, and in accordance with this Agreement, applicable laws, and any guidelines issued by PwT TECH SOLUTIONS COMPANY LIMITED - PwT.</li>
                    <li>Provide us with all necessary information, instructions, content, access credentials, media assets, and documents relevant to the provision of Services in a timely and complete manner.</li>
                    <li>Communicate clear and reasonable timelines, and provide feedback and revision requests within agreed timeframes to avoid disruption or delay.</li>
                    <li>Treat our team members, including employees, contractors, agents, and advisors, with professionalism and respect at all times.</li>
                    <li>Adhere to any mutually agreed-upon timelines for delivering content or information needed for us to complete the Services.</li>
                    <li>Pay all applicable service fees, including additional charges where revised or expanded instructions go beyond the scope of the original agreement or Proposal.</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4">4.2 Prohibited Conduct</h3>
                <p className="text-gray-600 mb-4">You agree not to:</p>
                <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                    <li>Use our Services or Work Product for any unlawful, unauthorized, or unethical purpose.</li>
                    <li>Provide false, misleading, incomplete, outdated, or forged documents or information.</li>
                    <li>Violate any applicable local, national, or international law or regulation in connection with your use of our Services.</li>
                    <li>Harass, threaten, abuse, or insult any of our team members through words, behavior, images, messages, or any form of communication.</li>
                    <li>Submit vague, unreasonable, or last-minute revision requests that hinder timely and effective delivery.</li>
                    <li>Solicit or attempt to solicit our personnel (employees, agents, or contractors) for employment or freelance work outside the scope of PwT TECH SOLUTIONS COMPANY LIMITED - PwT without our prior written consent.</li>
                    <li>Create or publish hyperlinks to our website or content without our prior written approval.</li>
                    <li>Act in any way that conflicts with the terms of this Agreement.</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4">4.3 Client Warranties</h3>
                <p className="text-gray-600 mb-4">You represent and warrant that:</p>
                <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                    <li>If you are engaging our Services on behalf of an organization, you have the authority to do so and to bind that organization to this Agreement.</li>
                    <li>Any materials or media assets you provide to us are either owned by you or properly licensed for our use, and do not infringe any third-party rights.</li>
                    <li>All information you provide is true, accurate, current, and complete, and we are entitled to rely on such information without further verification.</li>
                    <li>Your engagement of our Services does not and will not conflict with any legal obligations, court orders, or existing contractual relationships.</li>
                    <li>You will comply with the full terms of this Agreement, including those outlined in this section and any Proposals or project-specific documents we issue.</li>
                </ul>
                <p className="text-gray-600 mb-4">
                    Failure to fulfill the above obligations may affect the quality, timing, or feasibility of our service delivery. In such cases, PwT TECH SOLUTIONS COMPANY LIMITED - PwT will not be held responsible for any resulting delays, limitations in performance, or additional costs.
                </p>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Intellectual Property and Ownership</h2>
                <p className="text-gray-600 mb-4">
                    This section sets out the rights and responsibilities of both PwT TECH SOLUTIONS COMPANY LIMITED - PwT and the Client with respect to intellectual property and confidential information, including ownership, licensing, use, and disclosure.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4">5.1 Confidential Information</h3>
                <p className="text-gray-600 mb-4">
                    All information disclosed during the course of our engagement, including the terms of engagement, campaign strategies, communications, and technical data, is considered confidential Information, unless it is already publicly available through no fault of either party, lawfully obtained from a third party, or independently developed. You agree not to disclose any confidential information to third parties except:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                    <li>To your Affiliates or Representatives on a need-to-know basis, provided they are bound by similar confidentiality obligations;</li>
                    <li>When required by law or legal proceedings, in which case you must, to the extent legally permissible, notify us in advance, limit disclosure as much as possible, and assist us in opposing such disclosure;</li>
                    <li>As otherwise permitted in writing by PwT TECH SOLUTIONS COMPANY LIMITED - PwT.</li>
                </ul>
                <p className="text-gray-600 mb-4">
                    Confidential information may only be used for purposes directly related to the performance of the Services. Any unauthorized use or profit derived from such use will be for PwT TECH SOLUTIONS COMPANY LIMITED - PwT's benefit.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4">5.2 Ownership of Existing Intellectual Property</h3>
                <p className="text-gray-600 mb-4">
                    <strong className="font-semibold text-gray-900">PwT Background IPR:</strong> PwT TECH SOLUTIONS COMPANY LIMITED - PwT retains full ownership of all intellectual property rights (IPR) it owns prior to or independent of the engagement ("Company Background IPR").
                </p>
                <p className="text-gray-600 mb-4">
                    <strong className="font-semibold text-gray-900">Client Background IPR:</strong> You retain ownership of all IPR you own prior to or independent of the engagement ("Client Background IPR"). You grant PwT TECH SOLUTIONS COMPANY LIMITED - PwT a non-exclusive, royalty-free, irrevocable worldwide licence to use such IPR solely for delivering the Services.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4">5.3 New Intellectual Property and Improvements</h3>
                <p className="text-gray-600 mb-4">Unless otherwise agreed:</p>
                <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                    <li>PwT TECH SOLUTIONS COMPANY LIMITED - PwT owns all IPR in materials or Work Product created solely by PwT TECH SOLUTIONS COMPANY LIMITED - PwT or jointly with the Client during the engagement ("New IPR"), as well as all improvements made to either party's background IPR.</li>
                    <li>You agree to waive and not assert any rights in respect of the New IPR or any such improvements.</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4">5.4 Transfer of Rights</h3>
                <p className="text-gray-600 mb-4">
                    Once all agreed fees are fully paid and all contractual obligations fulfilled, PwT TECH SOLUTIONS COMPANY LIMITED - PwT will transfer the ownership of the applicable New IPR and improvements to you. This transfer will take place at the end of the engagement or another time as mutually agreed.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4">5.5 Portfolio Use</h3>
                <p className="text-gray-600 mb-4">
                    Unless otherwise agreed in writing, you agree that PwT TECH SOLUTIONS COMPANY LIMITED - PwT may showcase the resulting Work Product in our portfolio for marketing purposes. This includes screenshots, testimonials, and public-facing campaign deliverables. Any materials shown will be subject to confidentiality obligations and not shared with competitors.
                </p>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Limitations of Liability</h2>
                <p className="text-gray-600 mb-4">
                    To the fullest extent permitted by applicable law, the following provisions set out the limitations of PwT TECH SOLUTIONS COMPANY LIMITED - PwT' legal responsibility and liability in connection with the services rendered under this Agreement.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4">6.1 General Release</h3>
                <p className="text-gray-600 mb-4">
                    By engaging our Services and using any deliverables we provide, you agree to release, hold harmless, and indemnify PwT TECH SOLUTIONS COMPANY LIMITED - PwT, including our directors, officers, employees, contractors, and advisors (collectively referred to as "Indemnified Persons"), from all claims, liabilities, losses, damages, or expenses (referred to as "Losses") that arise directly or indirectly from:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                    <li>Your misuse or improper reliance on our Services or Work Product;</li>
                    <li>Any breach of your obligations under this Agreement;</li>
                    <li>Your use of third-party materials, platforms, or services in connection with our work;</li>
                    <li>Or your failure to provide accurate, timely, or complete instructions or assets.</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4">6.2 No Liability for Indirect Loss</h3>
                <p className="text-gray-600 mb-4">
                    To the fullest extent permitted by law, PwT TECH SOLUTIONS COMPANY LIMITED - PwT will not be liable for any indirect, incidental, special, or consequential damages. This includes loss of business, revenue, profits, data, goodwill, or opportunity, even if we have been advised of the possibility of such loss, arising from or related to your use of our Services or Work Product.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4">6.3 Services Provided "As Is"</h3>
                <p className="text-gray-600 mb-4">
                    Our Services are provided on an "as is" and "as available" basis. We do not guarantee any specific outcomes. We also make no representations or warranties, whether express or implied, regarding the value, performance, suitability, or effectiveness of the Services or Work Product.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4">6.4 External Risks and Limitations</h3>
                <p className="text-gray-600 mb-4">You acknowledge that:</p>
                <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                    <li><strong className="font-semibold text-gray-900">We depend on your instructions:</strong> We rely on the accuracy of the information and materials you provide and are not responsible for verifying them.</li>
                    <li><strong className="font-semibold text-gray-900">Electronic communications have inherent risks:</strong> Delays, data loss, or interceptions beyond our control may occur. You accept these risks.</li>
                    <li><strong className="font-semibold text-gray-900">You assume responsibility for edits:</strong> Any changes you make to our deliverables may affect functionality or performance. We are not liable for resulting issues.</li>
                    <li><strong className="font-semibold text-gray-900">Third-party platforms and tools may change:</strong> Search engine algorithms, social media policies, and market conditions are outside our control and may impact outcomes.</li>
                    <li><strong className="font-semibold text-gray-900">Our content is informational only:</strong> Website content and communications from PwT TECH SOLUTIONS COMPANY LIMITED - PwT should not be relied upon as legal, financial, or professional advice.</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4">6.5 Maximum Liability</h3>
                <p className="text-gray-600 mb-4">
                    If PwT TECH SOLUTIONS COMPANY LIMITED - PwT is found liable for any matter under this Agreement, our total liability will not exceed the total fees paid by you to us in the 12-month period immediately preceding the event giving rise to the claim.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4">6.6 Equitable Relief</h3>
                <p className="text-gray-600 mb-4">
                    If you breach this Agreement or misuse our Services or Work Product in a way that causes ongoing or irreparable harm, PwT TECH SOLUTIONS COMPANY LIMITED - PwT reserves the right to seek injunctive or equitable relief in addition to any legal remedies available.
                </p>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Termination</h2>
                <p className="text-gray-600 mb-4">
                    The Agreement may be brought to an end under specific circumstances outlined below. PwT TECH SOLUTIONS COMPANY LIMITED - PwT and the client are expected to approach termination professionally and with reasonable notice.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4">7.1 Termination by Either Party</h3>
                <p className="text-gray-600 mb-4">
                    Either PwT TECH SOLUTIONS COMPANY LIMITED - PwT or the Client may terminate the engagement at any time by providing written notice at least 30 days in advance. If the Client initiates termination:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                    <li>Where services have already commenced, you agree to compensate PwT TECH SOLUTIONS COMPANY LIMITED - PwT for time, resources, and commitments already allocated to the project.</li>
                    <li>If termination occurs prior to the launch of any campaign or deliverable (where applicable), you agree to cover the planning and administrative costs incurred by PwT TECH SOLUTIONS COMPANY LIMITED - PwT.</li>
                </ul>
                <p className="text-gray-600 mb-4">
                    These fees are not penalties but represent fair and reasonable compensation based on the scope and stage of the engagement.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4">7.2 Immediate Termination by PwT</h3>
                <p className="text-gray-600 mb-4">
                    PwT TECH SOLUTIONS COMPANY LIMITED - PwT reserves the right to terminate this Agreement with 7 days' written notice if, in our sole discretion, you:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                    <li>Fail to meet your obligations under this Agreement, including payment schedules or required cooperation;</li>
                    <li>Repeatedly delay communication, approvals, or deliverables;</li>
                    <li>Engage in conduct that is unprofessional, abusive, or causes distress to PwT TECH SOLUTIONS COMPANY LIMITED - PwT personnel.</li>
                </ul>
                <p className="text-gray-600 mb-4">
                    In such cases, you will remain liable for a portion of the remaining fees, reflective of the time and effort already invested and the disruption caused.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4">7.3 Consequences of Termination</h3>
                <p className="text-gray-600 mb-4">
                    Termination of this Agreement will not affect either party's rights or obligations that accrued prior to termination. Specifically:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                    <li>Provisions relating to confidentiality, intellectual property, warranties, and liability will survive termination.</li>
                    <li>Each party must promptly return or securely destroy any confidential information or materials shared during the engagement.</li>
                    <li>Access to third-party systems provided to PwT TECH SOLUTIONS COMPANY LIMITED - PwT (such as ad platforms or social media accounts) will be discontinued, and credentials will not be stored or modified after termination.</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4">7.4 No Termination for Client-Caused Delays</h3>
                <p className="text-gray-600 mb-4">
                    You may not terminate this Agreement due to project delays if such delays are the result of your own failure to provide timely input, content, approvals, or other essential cooperation required for the delivery of services.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Governing Law and Dispute Resolution</h2>
                <p className="text-gray-600 mb-4">
                    These Terms are governed by and construed in accordance with the laws of Hong Kong. Any disputes arising from these Terms or your use of our service shall be subject to the exclusive jurisdiction of the courts of Hong Kong.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact Information</h2>
                <p className="text-gray-600 mb-4">
                    If you have any questions about this Policy, please contact us using the following details:
                </p>
                <p className="text-gray-600 mb-4">
                    <strong className="font-semibold text-gray-900">PwT TECH SOLUTIONS COMPANY LIMITED - PwT</strong>
                </p>
                <p className="text-gray-600 mb-4">
                    Email: contact@pwttech.com<br />
                    Address: 114 WASHINGTON BLVD STE C, 90292
                </p>
            </div>
        </div>
    `;

export default function Page() {
  return (
    <>
      <Header />
      <main className="bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Service Terms and Conditions</h1>
          <p className="text-sm text-gray-500 mb-10">Last updated: March 15, 2026</p>
          <div className="prose prose-gray max-w-none" dangerouslySetInnerHTML={{__html: CONTENT}} />
        </div>
      </main>
      <Footer />
    </>
  );
}
