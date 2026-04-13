import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Legal Agreement | PwT Tech Solutions',
};

const CONTENT = `
                    <p className="text-gray-600 mb-4"><strong className="font-semibold text-gray-900">Effective Date:</strong> December 01, 2025</p>
                    
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction and Overview</h2>
                    <p className="text-gray-600 mb-4">PwT TECH SOLUTIONS COMPANY LIMITED - PwT, together with its subsidiaries and affiliated entities, collectively referred to as "PwT", "we", "our", or "us", unless the context requires otherwise.</p>
                    
                    <p className="text-gray-600 mb-4">This Agreement establishes the general terms and conditions governing your use of the Site and the marketing and related services purchased or accessed through it (individually and collectively, the "Services"). It applies in addition to, and not in substitution of, any specific agreements or statements of work that may apply to particular Services you engage with PwT.</p>
                    
                    <p className="text-gray-600 mb-4">By browsing the Site, creating an account, engaging our Services, or otherwise using the Site in any capacity, you acknowledge that you have read, understood, and agreed to be legally bound by this Agreement, as well as any additional policies or service-specific terms incorporated herein by reference. If you do not agree to be bound by this Agreement, you must refrain from using our Site and Services.</p>
                    
                    <p className="text-gray-600 mb-4">The relationship between PwT and you under this Agreement is strictly that of an independent contractor and client. Nothing in this Agreement shall be construed to establish a partnership, joint venture, employment, agency, or fiduciary relationship. This Agreement does not confer any rights or remedies upon any third party.</p>
                    
                    <p className="text-gray-600 mb-4">PwT reserves the right, in its sole discretion, to amend or modify this Agreement, including any incorporated policies, at any time. Any such modifications shall take effect immediately upon posting on the Site. Your continued use of the Site or Services following any modifications constitutes your acceptance of the Agreement as revised. If you do not agree with the updated terms, you must discontinue use of the Site and Services immediately.</p>
                    
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Eligibility & Authority</h2>
                    <p className="text-gray-600 mb-4">By accessing or using the Site and Services, you represent and warrant that you meet the following eligibility requirements:</p>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4">2.1 Age and Legal Capacity</h3>
                    <p className="text-gray-600 mb-4">You must be at least eighteen (18) years of age or the age of legal majority in your jurisdiction, whichever is higher, and possess the full legal capacity to enter into binding agreements. By accepting this Agreement, you confirm that you are legally capable of understanding the rights and obligations contained herein. If you do not meet these requirements, you must not access or use the Services.</p>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4">2.2 Authority for Businesses</h3>
                    <p className="text-gray-600 mb-4">If you are entering into this Agreement on behalf of a company, organization, or other legal entity, you represent and warrant that:</p>
                    <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                        <li>You have the full authority, right, and power to bind such entity to this Agreement; and</li>
                        <li>The entity you represent is duly organized, validly existing, and in good standing under the laws of its jurisdiction of incorporation or formation.</li>
                    </ul>
                    
                    <p className="text-gray-600 mb-4">In such cases, all references to "you" or "your" in this Agreement shall apply to both you as an individual and the entity on whose behalf you act. PwT reserves the right, at its sole discretion, to request documentation verifying your authority to bind such entity, and to suspend or terminate Services if such authority cannot be demonstrated.</p>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4">2.3 Prohibited Users</h3>
                    <p className="text-gray-600 mb-4">You may not use the Services if:</p>
                    <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                        <li>You are located in a jurisdiction where the use of such Services is prohibited by law; or</li>
                        <li>You have previously been suspended or terminated from using PwT's Services for violations of this Agreement or applicable laws.</li>
                    </ul>
                    
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Accounts & Data Management</h2>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">3.1 Data Collection, Storage, and Processing</h3>
                    <p className="text-gray-600 mb-4">By using the Services, you acknowledge and consent that PwT may collect, process, and store personal data and business information provided by you in accordance with our Privacy Protection. This may include, but is not limited to, information necessary to perform marketing, advertising, website development, and related services.</p>
                    
                    <p className="text-gray-600 mb-4">You further acknowledge and agree that, in providing the Services, PwT may transfer, store, or process data outside of your country of residence, including in jurisdictions that may not provide the same level of data protection as your home country. PwT will take reasonable measures to ensure the confidentiality, integrity, and security of such data, but does not guarantee absolute protection against unauthorized access or breaches.</p>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4">3.2 Client Responsibility for Content and Data</h3>
                    <p className="text-gray-600 mb-4">You retain ownership of all data, content, and materials you provide to PwT for the purpose of delivering the Services ("Client Data"). You represent and warrant that you have the necessary rights, licenses, and permissions to provide such Client Data to PwT and to authorize its use in connection with the Services.</p>
                    
                    <p className="text-gray-600 mb-4">You are solely responsible for:</p>
                    <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                        <li>The accuracy, quality, and legality of Client Data;</li>
                        <li>Ensuring Client Data does not infringe on any intellectual property, privacy, or contractual rights of third parties; and</li>
                        <li>Backing up and securing your own Client Data.</li>
                    </ul>
                    
                    <p className="text-gray-600 mb-4">PwT shall not be held responsible for any loss, corruption, or inaccuracy of Client Data supplied by you, nor for any liability arising from your failure to obtain appropriate consents or authorizations for the use of such data.</p>
                    
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Availability of Website/Services</h2>
                    <p className="text-gray-600 mb-4">PwT is committed to delivering reliable services; however, uninterrupted availability cannot be guaranteed due to the inherent nature of online systems and external factors. This section outlines our commitments regarding uptime, limitations on continuous access, and the circumstances under which we may suspend, modify, or discontinue Services.</p>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4">4.1 Service Uptime and Maintenance</h3>
                    <p className="text-gray-600 mb-4">PwT will make reasonable efforts to ensure that the Site and Services are available and operating efficiently. From time to time, scheduled maintenance, upgrades, or repairs may be carried out to maintain or improve the performance and functionality of the Services. PwT shall endeavor to provide advance notice of any planned downtime where practicable.</p>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4">4.2 No Guarantee of Uninterrupted Access</h3>
                    <p className="text-gray-600 mb-4">You acknowledge and agree that the Site and Services are provided on an "as available" basis. PwT does not guarantee continuous, uninterrupted, or error-free access to the Site or Services, nor does it warrant that defects will be corrected or that the Site or Services will be free from viruses or other harmful components.</p>
                    
                    <p className="text-gray-600 mb-4">PwT shall not be liable for any delay, disruption, or unavailability of the Services resulting from circumstances beyond its reasonable control, including but not limited to internet failures, hosting outages, power disruptions, cyberattacks, natural disasters, labor disputes, government actions, or failures of third-party service providers.</p>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4">4.3 Suspension or Modification of Services</h3>
                    <p className="text-gray-600 mb-4">PwT reserves the right, at its sole discretion, to suspend, restrict, or modify access to the Site or Services at any time, with or without prior notice, for reasons including but not limited to:</p>
                    <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                        <li>System maintenance, upgrades, or security updates;</li>
                        <li>Compliance with applicable laws, regulations, or governmental requests;</li>
                        <li>Technical issues, errors, or vulnerabilities;</li>
                        <li>Suspected or actual violation of this Agreement by you; or</li>
                        <li>Discontinuation of certain Services or features.</li>
                    </ul>
                    
                    <p className="text-gray-600 mb-4">In addition, PwT may terminate or discontinue the Site or Services, in whole or in part, at any time. To the fullest extent permitted by law, PwT shall not be liable for any losses, damages, or inconveniences you may suffer as a result of such suspension, modification, or termination.</p>
                    
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Client Responsibilities and Rules of Conduct</h2>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">5.1 Lawful Use of Services</h3>
                    <p className="text-gray-600 mb-4">You agree to use the Services solely for lawful purposes and in accordance with this Agreement. You shall ensure that all activities conducted, including any content, data, or materials you provide to PwT, comply with applicable local, regional, and international laws and regulations.</p>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4">5.2 Prohibited Conduct</h3>
                    <p className="text-gray-600 mb-4">You must not, whether directly or indirectly:</p>
                    <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                        <li>Use the Services for any fraudulent, misleading, harmful, or unlawful purpose;</li>
                        <li>Interfere with, disrupt, or compromise the security, performance, or functionality of the Site or Services;</li>
                        <li>Upload, transmit, or share content that infringes upon any intellectual property, privacy, or contractual rights of third parties;</li>
                        <li>Circumvent, disable, or tamper with security features or access restrictions of the Site or Services;</li>
                        <li>Engage in activities that may damage the reputation or operations of PwT, its partners, or service providers;</li>
                        <li>Use automated scripts, bots, crawlers, or other unauthorized tools to access, collect, or manipulate data from the Site or Services.</li>
                    </ul>
                    
                    <p className="text-gray-600 mb-4">PwT reserves the right to investigate suspected violations of this Agreement and to suspend or terminate Services at its sole discretion where prohibited conduct is identified.</p>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4">5.3 Compliance with Advertising and Data Protection Laws</h3>
                    <p className="text-gray-600 mb-4">You acknowledge and agree that, in engaging PwT's Services, you remain responsible for complying with all applicable advertising, marketing, and data protection laws, including but not limited to:</p>
                    <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                        <li>Privacy and data protection regulations (e.g., Singapore's PDPA, GDPR where applicable);</li>
                        <li>Intellectual property and copyright laws;</li>
                        <li>Consumer protection standards in your jurisdiction;</li>
                        <li>Policies and guidelines of third-party advertising platforms (e.g., Google Ads, Facebook, Instagram, YouTube, LinkedIn).</li>
                    </ul>
                    
                    <p className="text-gray-600 mb-4">You further represent and warrant that you have obtained all necessary consents, authorizations, and licenses to use any content, materials, or data provided to PwT in connection with the Services. PwT shall not be responsible for any fines, penalties, or liabilities arising from your failure to comply with applicable laws or platform policies.</p>
                    
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">6. PwT Rights and Reservation of Service Changes</h2>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">6.1 Right to Refuse, Remove, or Suspend</h3>
                    <p className="text-gray-600 mb-4">PwT reserves the right, in its sole discretion, to:</p>
                    <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                        <li>Decline to provide Services to any individual or entity without obligation to provide a reason;</li>
                        <li>Suspend or terminate your Account or access to the Services in the event of suspected or actual breach of this Agreement, unlawful activities, or conduct deemed harmful to PwT or its partners;</li>
                        <li>Remove, reject, or require modifications to any content, data, or materials provided by you if such content is found, or reasonably suspected, to be unlawful, infringing, misleading, harmful, or contrary to industry guidelines.</li>
                    </ul>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4">6.2 Modifications to Services and Strategies</h3>
                    <p className="text-gray-600 mb-4">You acknowledge and agree that:</p>
                    <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                        <li>PwT retains full discretion to adjust, modify, or discontinue any aspect of its Site, Services, marketing strategies, or campaigns as it deems necessary;</li>
                        <li>Such modifications may be made in response to changes in industry practices, platform rules (e.g., Google, Facebook, YouTube, LinkedIn), market conditions, technological updates, or legal/regulatory requirements;</li>
                        <li>Where practicable, PwT will notify you of material changes to the Services. However, PwT shall not be liable for any loss or inconvenience caused by such modifications.</li>
                    </ul>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4">6.3 Reservation of Rights</h3>
                    <p className="text-gray-600 mb-4">All rights not expressly granted to you under this Agreement are reserved by PwT. Without limiting the generality of the foregoing, PwT retains all rights to:</p>
                    <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                        <li>Develop, improve, or expand the scope of its Services without obligation to you;</li>
                        <li>Enforce compliance with this Agreement, including through monitoring, audits, or investigations;</li>
                        <li>Protect its intellectual property, confidential information, and proprietary methodologies.</li>
                    </ul>
                    
                    <p className="text-gray-600 mb-4">PwT's decision to exercise or not exercise any of the rights described in this section shall not constitute a waiver of such rights.</p>
                    
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Third-Party Platforms and Links</h2>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">7.1 Use of Third-Party Platforms and Tools</h3>
                    <p className="text-gray-600 mb-4">You acknowledge and agree that PwT may utilize third-party platforms, technologies, or services—including but not limited to Google, Facebook, YouTube, LinkedIn, web hosting providers, email marketing software, and analytics tools—to perform the Services. These third parties are independent entities, and their availability, performance, and terms of use are outside PwT's control.</p>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4">7.2 Links to Third-Party Websites</h3>
                    <p className="text-gray-600 mb-4">The Site may contain links to third-party websites or resources. Such links are provided for convenience only and do not constitute an endorsement, sponsorship, or recommendation by PwT of the third-party sites, their operators, or their content. You acknowledge that PwT is not responsible or liable for the availability, accuracy, content, or policies of such third-party sites. Access and use of these sites are at your own risk.</p>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4">7.3 Limitation of Liability for Third-Party Services</h3>
                    <p className="text-gray-600 mb-4">PwT shall not be liable for any errors, outages, losses, damages, or issues arising from the use of third-party platforms, integrations, or services. This includes, without limitation, account suspensions, policy changes, service interruptions, or technical failures on platforms such as Google Ads, Facebook Ads, or similar advertising and hosting services.</p>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4">7.4 Client's Responsibility for Third-Party Compliance</h3>
                    <p className="text-gray-600 mb-4">You are solely responsible for:</p>
                    <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                        <li>Complying with all applicable terms, policies, and guidelines of third-party platforms used in connection with the Services (e.g., Google Ads Policies, Meta Advertising Guidelines, YouTube Community Guidelines);</li>
                        <li>Obtaining and maintaining any accounts, subscriptions, or licenses required to use such third-party services;</li>
                        <li>Ensuring that your content and campaigns conform to third-party requirements and applicable laws.</li>
                    </ul>
                    
                    <p className="text-gray-600 mb-4">PwT may, at its discretion, provide advice or recommendations regarding third-party policies, but the ultimate responsibility for compliance rests with you.</p>
                    
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Intellectual Property Rights</h2>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">8.1 PwT's Pre-Existing Intellectual Property</h3>
                    <p className="text-gray-600 mb-4">All intellectual property, proprietary methodologies, software, source code, design frameworks, marketing strategies, know-how, and other materials developed, owned, or licensed by PwT prior to or independently of this Agreement ("PwT's IP") shall remain the exclusive property of PwT or its licensors. Except as expressly provided in this Agreement, no rights, title, or interest in PwT IP are transferred or granted to you.</p>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4">8.2 Deliverables Created for the Client</h3>
                    <p className="text-gray-600 mb-4">Subject to your full and timely payment of all fees and charges due under this Agreement, PwT will assign or grant to you a license to use the final deliverables specifically created for you under a statement of work or project agreement (the "Deliverables"). Such Deliverables may include, without limitation, custom designs, website code, marketing content, graphics, or campaign materials.</p>
                    
                    <p className="text-gray-600 mb-4">Unless otherwise agreed in writing, PwT retains all rights to any underlying tools, templates, processes, or generic components used in the creation of the Deliverables.</p>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4">8.3 Client's License and Usage Rights</h3>
                    <p className="text-gray-600 mb-4">Upon delivery and payment, you shall receive a non-exclusive, non-transferable, worldwide license to use the Deliverables solely for your own business purposes. This license does not extend to resale, sublicensing, or distribution of the Deliverables to third parties unless expressly authorized in writing by PwT.</p>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4">8.4 Restrictions</h3>
                    <p className="text-gray-600 mb-4">You shall not, without PwT's prior written consent:</p>
                    <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                        <li>Copy, reproduce, or distribute Deliverables for resale, sublicensing, or commercial exploitation;</li>
                        <li>Reverse engineer, modify, or create derivative works from PwT IP or Deliverables beyond the scope of the license granted;</li>
                        <li>Remove, obscure, or alter any proprietary notices or branding included in the Deliverables or PwT IP.</li>
                    </ul>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4">8.5 Client-Provided Materials</h3>
                    <p className="text-gray-600 mb-4">You represent and warrant that any content, trademarks, logos, or other materials you provide to PwT for incorporation into the Deliverables are lawfully owned or licensed by you. You grant PwT a limited, non-exclusive, royalty-free license to use such materials solely for the purpose of delivering the Services.</p>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4">8.6 Portfolio Rights</h3>
                    <p className="text-gray-600 mb-4">Unless otherwise agreed in writing, PwT reserves the right to display the Deliverables, or excerpts thereof, in its portfolio, marketing materials, and case studies, provided that such use does not disclose your confidential information.</p>
                    
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Payment Terms</h2>
                    <p className="text-gray-600 mb-4">Payment is a fundamental condition of the Services provided by PwT. This section outlines the obligations of Clients in relation to service fees, billing cycles, applicable taxes, and the consequences of late or non-payment. These terms are complementary to, and shall be read in conjunction with, PwT's published Service Payment Policy and Payment & Refund Policy.</p>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4">9.1 Service Fees and Billing</h3>
                    <p className="text-gray-600 mb-4"><strong className="font-semibold text-gray-900">(a) Service Fees:</strong> The fees payable for Services shall be as agreed in writing between the Parties, whether in a formal Service Agreement, Statement of Work, or order confirmation. Fees are quoted in the currency specified in the invoice or agreement and are exclusive of applicable taxes, unless otherwise stated.</p>
                    
                    <p className="text-gray-600 mb-4"><strong className="font-semibold text-gray-900">(b) Billing Cycle:</strong> Unless otherwise agreed, PwT will issue invoices in advance of the provision of Services. Invoices are payable within the time frame stated therein, typically within seven (7) to thirty (30) calendar days from the date of issuance.</p>
                    
                    <p className="text-gray-600 mb-4"><strong className="font-semibold text-gray-900">(c) Recurring Services:</strong> For subscription-based or recurring campaigns (e.g., website maintenance service, hosting, or retainer services), billing shall be conducted on a recurring basis (monthly, quarterly, or annually, as specified). Clients are responsible for ensuring that timely payments are made to avoid service interruption.</p>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4">9.2 Taxes and Other Applicable Charges</h3>
                    <p className="text-gray-600 mb-4"><strong className="font-semibold text-gray-900">(a) Taxes:</strong> All fees are exclusive of any applicable goods and services tax (GST), value-added tax (VAT), sales tax, or other governmental charges, which shall be borne by the Client.</p>
                    
                    <p className="text-gray-600 mb-4"><strong className="font-semibold text-gray-900">(b) Bank/Transaction Charges:</strong> Clients are responsible for any bank transfer fees, credit card surcharges, or other payment processing costs incurred in connection with their payments.</p>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4">9.3 Payment Methods</h3>
                    <p className="text-gray-600 mb-4">PwT accepts payment via bank transfer, credit card, or other methods as communicated in writing. The Client must use the reference or invoice number provided to ensure proper allocation of funds.</p>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4">9.4 Late Payments and Consequences</h3>
                    <p className="text-gray-600 mb-4"><strong className="font-semibold text-gray-900">(a) Suspension of Services:</strong> PwT reserves the right to suspend or withhold Services in the event of late or non-payment, without liability to the Client. Suspension shall not relieve the Client of its payment obligations.</p>
                    
                    <p className="text-gray-600 mb-4"><strong className="font-semibold text-gray-900">(b) Costs of Collection:</strong> The Client shall be liable for all reasonable costs incurred by PwT in recovering overdue amounts, including legal fees, collection agency charges, and court costs.</p>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4">9.5 No Set-Off</h3>
                    <p className="text-gray-600 mb-4">All amounts payable to PwT under this Agreement shall be paid in full without any set-off, counterclaim, deduction, or withholding, except as required by law.</p>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4">9.6 Non-Refundable Payments</h3>
                    <p className="text-gray-600 mb-4">Except as expressly provided under PwT's Payment & Refund Policy, all payments made are non-refundable, including in the event of early termination of Services by the Client.</p>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4">9.7 Client Responsibility for Accuracy of Payment</h3>
                    <p className="text-gray-600 mb-4">It is the Client's responsibility to ensure that payment information provided to PwT is accurate and up to date. Any delays or service disruptions arising from inaccurate payment details shall not be attributable to PwT.</p>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4">9.8 Currency</h3>
                    <p className="text-gray-600 mb-4">Unless otherwise agreed in writing, all payments shall be made in United States Dollars (USD). Currency conversion costs or fluctuations in exchange rates shall be borne by the Client.</p>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4">9.9 Reservation of Rights</h3>
                    <p className="text-gray-600 mb-4">PwT reserves the right to revise its service fees, billing practices, or accepted payment methods at its sole discretion. Such changes will be communicated to Clients with reasonable advance notice and, unless otherwise stated, will apply prospectively.</p>
                    
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Limitation of Liability</h2>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">10.1 Services Provided "As Is"</h3>
                    <p className="text-gray-600 mb-4">All Services, deliverables, and materials provided by PwT are offered on an "as is" and "as available" basis. To the maximum extent permitted by law, PwT disclaims all warranties, whether express, implied, statutory, or otherwise, including but not limited to any implied warranties of merchantability, fitness for a particular purpose, accuracy, reliability, or non-infringement. PwT does not warrant that the Services will be uninterrupted, error-free, secure, or free of viruses or other harmful components.</p>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4">10.2 Exclusion of Damages</h3>
                    <p className="text-gray-600 mb-4">To the fullest extent permitted by applicable law, PwT shall not be liable to the Client or any third party for any:</p>
                    <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                        <li>Indirect, incidental, special, punitive, or consequential damages;</li>
                        <li>Loss of revenue, profit, business, goodwill, anticipated savings, data, or opportunities;</li>
                        <li>Claims or damages arising from third-party platforms, integrations, or tools used in connection with the Services (e.g., Google, Facebook, hosting providers); or</li>
                        <li>Claims based on circumstances beyond PwT's reasonable control.</li>
                    </ul>
                    
                    <p className="text-gray-600 mb-4">These exclusions shall apply regardless of the cause of action (whether in contract, tort, negligence, strict liability, or otherwise), even if PwT has been advised of the possibility of such damages.</p>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4">10.3 Cap on Liability</h3>
                    <p className="text-gray-600 mb-4">Without prejudice to the exclusions in Section 10.2, the total aggregate liability of PwT arising out of or relating to this Agreement, whether in contract, tort, negligence, strict liability, or otherwise, shall in no event exceed the total amounts actually paid by the Client to PwT for the Services giving rise to the claim during the twelve (12) months immediately preceding the event giving rise to such liability.</p>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4">10.4 Essential Purpose</h3>
                    <p className="text-gray-600 mb-4">The limitations and exclusions set out in this Section 10 are fundamental to the allocation of risk between the Parties and form a material basis of the bargain. The Client acknowledges and agrees that the fees charged by PwT reflect this risk allocation.</p>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4">10.5 Jurisdictional Exceptions</h3>
                    <p className="text-gray-600 mb-4">Some jurisdictions do not allow the exclusion of certain warranties or the limitation of liability for incidental or consequential damages. In such cases, PwT's liability shall be limited to the maximum extent permitted by applicable law.</p>
                    
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Indemnity</h2>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">11.1 Client's Indemnification Obligation</h3>
                    <p className="text-gray-600 mb-4">The Client agrees to indemnify, defend, and hold harmless PwT, its directors, officers, employees, affiliates, agents, contractors, and licensors from and against any and all claims, demands, actions, damages, losses, liabilities, costs, and expenses (including reasonable legal fees and court costs) arising out of or in connection with:</p>
                    <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                        <li>The Client's use or misuse of the Services;</li>
                        <li>Any breach of this Agreement or violation of applicable laws or regulations by the Client;</li>
                        <li>Any content, data, or materials provided, uploaded, or distributed by the Client, including any infringement of intellectual property rights, privacy rights, publicity rights, or other proprietary rights of any third party;</li>
                        <li>Any unlawful, fraudulent, negligent, or willful act or omission by the Client; and</li>
                        <li>Any claims brought by third parties (including regulatory authorities) against PwT arising from the Client's advertising campaigns, promotional content, or use of third-party platforms.</li>
                    </ul>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4">11.2 Procedures for Indemnification</h3>
                    <p className="text-gray-600 mb-4">PwT shall promptly notify the Client of any claim subject to indemnification under this Agreement. The Client shall assume control of the defense and settlement of such claim, provided that:</p>
                    <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                        <li>The Client shall not settle any claim in a manner that imposes any admission of liability, financial obligation, or injunctive relief on PwT without its prior written consent; and</li>
                        <li>PwT reserves the right, at its own expense, to participate in the defense of any matter subject to indemnification.</li>
                    </ul>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4">11.3 Continuing Obligation</h3>
                    <p className="text-gray-600 mb-4">The Client's obligations under this Section 11 shall survive the termination or expiration of this Agreement and shall remain in full force and effect for any claims arising from conduct during the term of this Agreement.</p>
                    
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Relationship of the Parties</h2>
                    <p className="text-gray-600 mb-4">This section clarifies the legal relationship between PwT and the Client, ensuring there is no misinterpretation of the parties' roles.</p>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4">12.1 Independent Contractors</h3>
                    <p className="text-gray-600 mb-4">The Parties acknowledge and agree that their relationship is that of independent contractors. Nothing in these Terms or any Service Agreement shall be construed to create an employer-employee relationship, partnership, joint venture, fiduciary relationship, or agency between the Parties. Neither Party has authority to bind the other Party or incur obligations on the other Party's behalf, except as expressly provided in writing.</p>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4">12.2 No Employment Relationship</h3>
                    <p className="text-gray-600 mb-4">PwT and its personnel are not employees of the Client. Accordingly, the Client shall not be liable for:</p>
                    <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                        <li>Payroll taxes, social security, or similar statutory contributions;</li>
                        <li>Employee benefits such as health insurance, retirement, or paid leave;</li>
                        <li>Any employment-related obligations under applicable labor laws.</li>
                    </ul>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4">12.3 No Partnership or Joint Venture</h3>
                    <p className="text-gray-600 mb-4">Nothing herein shall be construed as establishing a partnership or joint venture between the Parties. The Parties expressly disclaim any intention to form such a relationship, and each Party shall remain solely responsible for its own operations, personnel, and expenses.</p>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4">12.4 No Agency Authority</h3>
                    <p className="text-gray-600 mb-4">Neither Party shall hold itself out as an agent, representative, or legal partner of the other, nor shall either Party have the authority to make any representations, warranties, or commitments on behalf of the other without express prior written consent.</p>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4">12.5 Independence of Obligations</h3>
                    <p className="text-gray-600 mb-4">Each Party shall be solely responsible for its own business activities and compliance with applicable laws, including tax obligations, labor regulations, and corporate filings, and nothing in these Terms shall transfer such responsibility to the other Party.</p>
                    
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Compliance with Laws</h2>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">13.1 General Compliance Obligation</h3>
                    <p className="text-gray-600 mb-4">The Client is solely responsible for ensuring that its use of PwT's Services complies with all applicable:</p>
                    <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                        <li>Local, regional, and national laws;</li>
                        <li>International regulations;</li>
                        <li>Industry-specific requirements.</li>
                    </ul>
                    <p className="text-gray-600 mb-4">This includes, but is not limited to, rules governing advertising, marketing, consumer protection, data protection, intellectual property, and e-commerce.</p>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4">13.2 Advertising and Marketing Regulations</h3>
                    <p className="text-gray-600 mb-4">The Client shall ensure that all advertising materials, promotional campaigns, and digital assets created, submitted, or approved for use in connection with PwT's Services:</p>
                    <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                        <li>Comply with truth-in-advertising standards;</li>
                        <li>Do not contain false, misleading, or deceptive claims;</li>
                        <li>Adhere to applicable platform-specific advertising policies (e.g., Google Ads, Facebook Ads, LinkedIn Ads).</li>
                    </ul>
                    <p className="text-gray-600 mb-4">PwT reserves the right to suspend or reject any materials that, in its reasonable discretion, may violate advertising laws or pose reputational or legal risks.</p>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4">13.3 Data Protection and Privacy</h3>
                    <p className="text-gray-600 mb-4">The Client must comply with all applicable data protection and privacy laws, including but not limited to:</p>
                    <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                        <li>The EU General Data Protection Regulation (GDPR);</li>
                        <li>The Singapore Personal Data Protection Act (PDPA);</li>
                        <li>The California Consumer Privacy Act (CCPA), if applicable;</li>
                        <li>Any other relevant local data protection frameworks.</li>
                    </ul>
                    
                    <p className="text-gray-600 mb-4">Specifically, the Client shall:</p>
                    <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                        <li>Obtain valid consents for the collection and use of personal data;</li>
                        <li>Provide required notices and disclosures to end-users;</li>
                        <li>Maintain appropriate safeguards for data storage and transfer.</li>
                    </ul>
                    
                    <p className="text-gray-600 mb-4">PwT shall not be held liable for the Client's failure to comply with such laws, even where PwT provides marketing or technical support.</p>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4">13.4 Consumer Protection and Fair Trading Laws</h3>
                    <p className="text-gray-600 mb-4">The Client shall ensure compliance with consumer protection laws, including obligations related to:</p>
                    <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                        <li>Clear and transparent pricing;</li>
                        <li>Fair contract terms;</li>
                        <li>Refund and cancellation rights;</li>
                        <li>Avoidance of unfair, aggressive, or misleading sales practices.</li>
                    </ul>
                    <p className="text-gray-600 mb-4">PwT may require the Client to provide supporting documentation or legal review to verify compliance prior to campaign execution.</p>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4">13.5 Intellectual Property and Content Compliance</h3>
                    <p className="text-gray-600 mb-4">The Client warrants that all materials, data, and content provided to PwT:</p>
                    <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                        <li>Do not infringe the intellectual property rights of third parties;</li>
                        <li>Do not contain unlawful, defamatory, obscene, or prohibited content;</li>
                        <li>Are licensed or owned by the Client with sufficient rights for use.</li>
                    </ul>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4">13.6 Export Controls and International Trade Laws</h3>
                    <p className="text-gray-600 mb-4">Where Services or campaigns involve cross-border operations, the Client must comply with applicable export controls, trade restrictions, and sanctions laws, including but not limited to regulations imposed by:</p>
                    <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                        <li>The U.S. Office of Foreign Assets Control (OFAC);</li>
                        <li>The European Union;</li>
                        <li>The United Nations;</li>
                        <li>Local trade or export control authorities.</li>
                    </ul>
                    <p className="text-gray-600 mb-4">The Client agrees not to engage PwT in any activities that may cause violation of these international restrictions.</p>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4">13.7 Responsibility and Liability</h3>
                    <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                        <li>The Client bears full responsibility for ensuring compliance with all relevant legal obligations.</li>
                        <li>Any penalties, damages, or legal claims arising from the Client's breach of compliance shall be borne solely by the Client.</li>
                        <li>PwT may suspend or terminate Services immediately if it reasonably believes that continued performance could result in a breach of law or regulatory requirement.</li>
                    </ul>
                    
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Miscellaneous Provisions</h2>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">14.1 Titles and Headings</h3>
                    <p className="text-gray-600 mb-4">The titles, headings, and numbering of sections contained in this Agreement are inserted solely for ease of reference. They shall not affect the meaning, interpretation, or construction of any provision of this Agreement.</p>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4">14.2 Severability</h3>
                    <p className="text-gray-600 mb-4">If any provision of this Agreement is determined by a court or competent authority to be invalid, illegal, or unenforceable, such provision shall be deemed severed from this Agreement. The remaining provisions shall continue in full force and effect, and the Parties shall negotiate in good faith to replace the invalid provision with a valid one that most closely reflects the original intent of the Parties.</p>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4">14.3 Entire Agreement</h3>
                    <p className="text-gray-600 mb-4">This Agreement constitutes the entire understanding between the Parties with respect to the subject matter hereof and supersedes all prior or contemporaneous agreements, representations, warranties, negotiations, or communications, whether oral or written. No statement, promise, or inducement made by either Party or its representatives that is not expressly contained herein shall be binding or enforceable.</p>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4">14.4 Amendments and Modifications</h3>
                    <p className="text-gray-600 mb-4">No amendment, modification, or waiver of any provision of this Agreement shall be effective unless it is:</p>
                    <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                        <li>In writing; and</li>
                        <li>Duly executed by authorized representatives of both Parties.</li>
                    </ul>
                    <p className="text-gray-600 mb-4">Any failure or delay by either Party to enforce any right or provision of this Agreement shall not constitute a waiver of such right or provision, nor shall it prevent the Party from exercising such right or provision in the future.</p>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4">14.5 Assignment Restrictions</h3>
                    <p className="text-gray-600 mb-4">The Client shall not assign, transfer, delegate, or otherwise dispose of its rights or obligations under this Agreement, whether voluntarily, involuntarily, or by operation of law, without the prior written consent of PwT. Any attempted assignment in contravention of this clause shall be null and void.</p>
                    
                    <p className="text-gray-600 mb-4">PwT, however, may assign or transfer its rights and obligations under this Agreement to an affiliate, successor entity, or in connection with a merger, acquisition, or sale of substantially all of its assets, provided that such assignment does not materially diminish the Client's rights under this Agreement.</p>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4">14.6 Binding Effect</h3>
                    <p className="text-gray-600 mb-4">Subject to the foregoing restrictions, this Agreement shall be binding upon and inure to the benefit of the Parties and their respective successors, permitted assigns, and legal representatives.</p>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4">14.7 Survival</h3>
                    <p className="text-gray-600 mb-4">Any provisions of this Agreement that by their nature are intended to survive termination or expiration, including but not limited to confidentiality, limitation of liability, indemnity, and payment obligations, shall remain in full force and effect notwithstanding such termination or expiration.</p>
                    
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Governing Law</h2>
                    <p className="text-gray-600 mb-4">These Terms are governed by and construed in accordance with the laws of Hong Kong. Any disputes arising from these Terms or your use of our service shall be subject to the exclusive jurisdiction of the courts of Hong Kong.</p>
                    
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">16. Changes to Terms</h2>
                    <p className="text-gray-600 mb-4">We reserve the right to modify these Terms at any time. We will notify you of significant changes by posting the updated Terms on our website with a new effective date. Your continued use of our service after such changes constitutes acceptance of the new Terms.</p>
                    
                    <div class="bg-gray-900 rounded-lg p-6 mt-8">
                        <h3 class="text-xl font-bold text-white mb-4">Contact Information</h3>
                        <p class="text-gray-300 mb-4">If you have any questions about this Agreement, please contact us using the following details:</p>
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
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Legal Agreement</h1>
          <p className="text-sm text-gray-500 mb-10">Last updated: March 15, 2026</p>
          <div className="prose prose-gray max-w-none" dangerouslySetInnerHTML={{__html: CONTENT}} />
        </div>
      </main>
      <Footer />
    </>
  );
}
