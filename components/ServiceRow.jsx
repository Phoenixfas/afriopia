import style from "../styles/Services.module.css"
import { FaCheck } from "react-icons/fa"
import Image from "next/image"

export default function ServiceRow() {
  return (
    <>
        

        <div id="hosting" className={`${style.serviceRow} ${style.blue}`}>
            <div className={style.serviceRow__left}>
                <h2>Hosting Services</h2>
                <p>With our hosting service, you can deploy a website in just 3 minutes. All you need to do is choose and enter your information.</p>
                <div className={style.serviceRow__list}>
                    <div className={style.serviceRow__item}>
                        <FaCheck size={20} className={style.itemIcon} />
                        <p>Cloud Database</p>
                    </div>
                    <div className={style.serviceRow__item}>
                        <FaCheck size={20} className={style.itemIcon} />
                        <p>Website Hosting</p>
                    </div>
                    <div className={style.serviceRow__item}>
                        <FaCheck size={20} className={style.itemIcon} />
                        <p>Email Servers</p>
                    </div>
                    <div className={style.serviceRow__item}>
                        <FaCheck size={20} className={style.itemIcon} />
                        <p>Server Management</p>
                    </div>
                    <div className={style.serviceRow__item}>
                        <FaCheck size={20} className={style.itemIcon} />
                        <p>Update and Maintenance</p>
                    </div>
                    <div className={style.serviceRow__item}>
                        <FaCheck size={20} className={style.itemIcon} />
                        <p>Troubleshooting Issues</p>
                    </div>
                </div>
            </div>
            <div className={style.serviceRow__right}>
                <Image src={"/images/service/hosting.png"} alt="hosting" objectFit="cover" width={400} height={350} quality={100} priority unoptimized={true} />
            </div>
        </div>



        <div id="iptv" className={`${style.serviceRow}`}>
            <div className={style.serviceRow__left_r}>
                <Image src={"/images/service/iptv.png"} alt="hosting" objectFit="cover" width={400} height={350} quality={100} priority unoptimized={true} />
            </div>
            <div className={style.serviceRow__right_r}>
                <h2>IPTV and Streaming</h2>
                <p>We deliver easy, flexible and scalable way of distributing video content around venue or number of venues.</p>
                <div className={style.serviceRow__list}>
                    <div className={style.serviceRow__item}>
                        <FaCheck size={20} className={style.itemIcon} />
                        <p>10,000+ TV channels.</p>
                    </div>
                    <div className={style.serviceRow__item}>
                        <FaCheck size={20} className={style.itemIcon} />
                        <p>20,000+ movies and VOD</p>
                    </div>
                    <div className={style.serviceRow__item}>
                        <FaCheck size={20} className={style.itemIcon} />
                        <p>H264 compression technology</p>
                    </div>
                    <div className={style.serviceRow__item}>
                        <FaCheck size={20} className={style.itemIcon} />
                        <p>SD and HD quality content.</p>
                    </div>
                </div>
            </div>
        </div>



        <div id="visp" className={`${style.serviceRow} ${style.blue}`}>
            <div className={style.serviceRow__left}>
                <h2>Internet Service (VISP)</h2>
                <p>We provide business grade internet network access with a number of options that offer high speed and network reliability.</p>
                <div className={style.serviceRow__list}>
                    <div className={style.serviceRow__item}>
                        <FaCheck size={20} className={style.itemIcon} />
                        <p>Internet for Home</p>
                    </div>
                    <div className={style.serviceRow__item}>
                        <FaCheck size={20} className={style.itemIcon} />
                        <p>Internet for Business</p>
                    </div>
                </div>
            </div>
            <div className={style.serviceRow__right}>
                <Image src={"/images/service/wifi.png"} alt="hosting" objectFit="cover" width={400} height={350} quality={100} priority unoptimized={true} />
            </div>
        </div>



        <div id="saas" className={`${style.serviceRow}`}>
            <div className={style.serviceRow__left_r}>
                <Image src={"/images/service/saas.png"} alt="hosting" objectFit="cover" width={400} height={350} quality={100} priority unoptimized={true} />
            </div>
            <div className={style.serviceRow__right_r}>
                <h2>Software as a Service (Saas)</h2>
                <p>We provide SaaS products that are web-hosted, subscription-based software products that enable our users to use them over the internet.</p>
                <div className={style.serviceRow__list}>
                    <div className={style.serviceRow__item}>
                        <FaCheck size={20} className={style.itemIcon} />
                        <p>ERP (Enterprise Resource Planning)</p>
                    </div>
                    <div className={style.serviceRow__item}>
                        <FaCheck size={20} className={style.itemIcon} />
                        <p>CRM (Customer Relationship Management)</p>
                    </div>
                    <div className={style.serviceRow__item}>
                        <FaCheck size={20} className={style.itemIcon} />
                        <p>Document Management</p>
                    </div>
                    <div className={style.serviceRow__item}>
                        <FaCheck size={20} className={style.itemIcon} />
                        <p>Social Networking</p>
                    </div>
                </div>
            </div>
        </div>



        <div id="web" className={`${style.serviceRow} ${style.blue}`}>
            <div className={style.serviceRow__left}>
                <h2>Website Development</h2>
                <p>We create all types of beautiful web design, using cutting-edge web development technologies. We provide everything from domain name purchases to domain hosting, website design, web hosting and maintenance plans to suit your needs. We also offer a free consultation for businesses looking to get started with a new website or redesign an existing one.</p>
                <div className={style.serviceRow__list}>
                    <div className={style.serviceRow__item}>
                        <FaCheck size={20} className={style.itemIcon} />
                        <p>Content Management System(CMS)</p>
                    </div>
                    <div className={style.serviceRow__item}>
                        <FaCheck size={20} className={style.itemIcon} />
                        <p>Online Ordering System / Online Payments.</p>
                    </div>
                    <div className={style.serviceRow__item}>
                        <FaCheck size={20} className={style.itemIcon} />
                        <p>Event Booking System.</p>
                    </div>
                    <div className={style.serviceRow__item}>
                        <FaCheck size={20} className={style.itemIcon} />
                        <p>Document Management System.</p>
                    </div>
                    <div className={style.serviceRow__item}>
                        <FaCheck size={20} className={style.itemIcon} />
                        <p>Blog / News Management.</p>
                    </div>
                    <div className={style.serviceRow__item}>
                        <FaCheck size={20} className={style.itemIcon} />
                        <p>Membership System.</p>
                    </div>
                </div>
            </div>
            <div className={style.serviceRow__right}>
                <Image src={"/images/service/web.png"} alt="hosting" objectFit="cover" width={400} height={350} quality={100} priority unoptimized={true} />
            </div>
        </div>



        <div id="mobile" className={`${style.serviceRow}`}>
            <div className={style.serviceRow__left_r}>
                <Image src={"/images/service/code.png"} alt="hosting" objectFit="cover" width={400} height={350} quality={100} priority unoptimized={true} />
            </div>
            <div className={style.serviceRow__right_r}>
                <h2>Mobile Development</h2>
                <p>We provide mobile application development that can assist you with anything from ideation and conceptualization to development, testing, and deployment. Our experienced team of engineers and designers will work with you to create your perfect app for both Android and iOS.</p>
                <div className={style.serviceRow__list}>
                    <div className={style.serviceRow__item}>
                        <FaCheck size={20} className={style.itemIcon} />
                        <p>Conceptualization</p>
                    </div>
                    <div className={style.serviceRow__item}>
                        <FaCheck size={20} className={style.itemIcon} />
                        <p>Design</p>
                    </div>
                    <div className={style.serviceRow__item}>
                        <FaCheck size={20} className={style.itemIcon} />
                        <p>Optimization</p>
                    </div>
                    <div className={style.serviceRow__item}>
                        <FaCheck size={20} className={style.itemIcon} />
                        <p>Maintenance</p>
                    </div>
                </div>
            </div>
        </div>



        <div id="security" className={`${style.serviceRow} ${style.blue}`}>
            <div className={style.serviceRow__left}>
                <h2>Internet Security</h2>
                <p>A well designed wireless infrastructure that optimized for reliability and performance is critical for any organization. Our wireless and network design expert will provide end-to-end consultation and installation, including hardware selection, procurement, cabling, installation, configuring, and testing prior to going live. </p>
                <div className={style.serviceRow__list}>
                    <div className={style.serviceRow__item}>
                        <FaCheck size={20} className={style.itemIcon} />
                        <p>VPN</p>
                    </div>
                    <div className={style.serviceRow__item}>
                        <FaCheck size={20} className={style.itemIcon} />
                        <p>Firewall</p>
                    </div>
                    <div className={style.serviceRow__item}>
                        <FaCheck size={20} className={style.itemIcon} />
                        <p>Network Management (Wi-Fi)</p>
                    </div>
                </div>
            </div>
            <div className={style.serviceRow__right}>
                <Image src={"/images/service/security.png"} alt="hosting" objectFit="cover" width={400} height={350} quality={100} priority unoptimized={true} />
            </div>
        </div>



        <div id="technical_support" className={`${style.serviceRow}`}>
            <div className={style.serviceRow__left_r}>
                <Image src={"/images/service/support.png"} alt="hosting" objectFit="cover" width={400} height={350} quality={100} priority unoptimized={true} />
            </div>
            <div className={style.serviceRow__right_r}>
                <h2>Technical Support & Technology Consulting</h2>
                <p>Our support, customer service, and technical teams are available at all times to help you and provide you expert recommendations, and technological solution you want to use inside your business.</p>
                <div className={style.serviceRow__list}>
                    <div className={style.serviceRow__item}>
                        <FaCheck size={20} className={style.itemIcon} />
                        <p>Risk Assessment Analysis</p>
                    </div>
                    <div className={style.serviceRow__item}>
                        <FaCheck size={20} className={style.itemIcon} />
                        <p>Adopting Emerging Tech</p>
                    </div>
                    <div className={style.serviceRow__item}>
                        <FaCheck size={20} className={style.itemIcon} />
                        <p>Disaster Recovery</p>
                    </div>
                    <div className={style.serviceRow__item}>
                        <FaCheck size={20} className={style.itemIcon} />
                        <p>Cloud Servicesy</p>
                    </div>
                </div>
            </div>
        </div>


        <div id="marketing" className={`${style.serviceRow} ${style.blue}`}>
            <div className={style.serviceRow__left}>
                <h2>Digital Marketing</h2>
                <p>Through digital marketing, we can help you grow your business and expand your customer connection by widening your reach on search engines, social media, and Google ads.</p>
                <div className={style.serviceRow__list}>
                    <div className={style.serviceRow__item}>
                        <FaCheck size={20} className={style.itemIcon} />
                        <p>Search Engine Optimization (SEO)</p>
                    </div>
                    <div className={style.serviceRow__item}>
                        <FaCheck size={20} className={style.itemIcon} />
                        <p>Search Engine Marketing (SEM)</p>
                    </div>
                    <div className={style.serviceRow__item}>
                        <FaCheck size={20} className={style.itemIcon} />
                        <p>Website Strategy</p>
                    </div>
                    <div className={style.serviceRow__item}>
                        <FaCheck size={20} className={style.itemIcon} />
                        <p>Social Media Marketing</p>
                    </div>
                    <div className={style.serviceRow__item}>
                        <FaCheck size={20} className={style.itemIcon} />
                        <p>Email Outreach</p>
                    </div>
                    <div className={style.serviceRow__item}>
                        <FaCheck size={20} className={style.itemIcon} />
                        <p>Re-targeting</p>
                    </div>
                    <div className={style.serviceRow__item}>
                        <FaCheck size={20} className={style.itemIcon} />
                        <p>Content Generation and Optimization</p>
                    </div>
                    <div className={style.serviceRow__item}>
                        <FaCheck size={20} className={style.itemIcon} />
                        <p>Quality Link Building</p>
                    </div>
                </div>
            </div>
            <div className={style.serviceRow__right}>
                <Image src={"/images/service/marketing.png"} alt="hosting" objectFit="cover" width={400} height={350} quality={100} priority unoptimized={true} />
            </div>
        </div>

        <div id="network" className={`${style.serviceRow}`}>
            <div className={style.serviceRow__left_r}>
                <Image src={"/images/service/network.png"} alt="hosting" objectFit="cover" width={400} height={350} quality={100} priority unoptimized={true} />
            </div>
            <div className={style.serviceRow__right_r}>
                <h2>Network Infrastructure</h2>
                <p>We provide network consulting services that help companies manage their network infrastructures. Our service offering revolves around core organization requirements: Our network infrastructure solutions enable clients to implement new technologies, increase efficiency and align their infrastructure with their business goals.</p>
                <div className={style.serviceRow__list}>
                    <div className={style.serviceRow__item}>
                        <FaCheck size={20} className={style.itemIcon} />
                        <p>Infrastructure</p>
                    </div>
                    <div className={style.serviceRow__item}>
                        <FaCheck size={20} className={style.itemIcon} />
                        <p>DC-LAN</p>
                    </div>
                    <div className={style.serviceRow__item}>
                        <FaCheck size={20} className={style.itemIcon} />
                        <p>WAN</p>
                    </div>
                    <div className={style.serviceRow__item}>
                        <FaCheck size={20} className={style.itemIcon} />
                        <p>Voice and Video</p>
                    </div>
                </div>
            </div>
        </div>

    </>
  )
}
