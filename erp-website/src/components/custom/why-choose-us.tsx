// components/WhyChooseUs.tsx
import Image from "next/image"
import { ShieldCheck, Layers3, Wrench } from "lucide-react"

export default function WhyChooseUs() {
    const features = [
        {
            title: "Secure & Reliable",
            description:
                "Our ERP is built with security-first principles, ensuring your data stays protected with role-based access control and audit logs.",
            icon: <ShieldCheck className="text-fuchsia-600" size={28} />,
        },
        {
            title: "Modular & Scalable",
            description:
                "Easily adapt as you grow — enable only the modules you need, from admissions to exams to staff management.",
            icon: <Layers3 className="text-orange-400" size={28} />,
        },
        {
            title: "Built for Indian Institutions",
            description:
                "Custom workflows, compliance, and language support tailored for schools and colleges across India.",
            icon: <Wrench className="text-sky-500" size={28} />,
        },
    ]

    return (
        <section id="why-us" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <h3 className="text-3xl font-bold">Why Choose Us?</h3>
                    <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
                        We bring deep domain expertise, modern tech, and practical design to solve the real problems of schools and colleges.
                    </p>
                </div>

                {/* Content */}
                <div className="flex flex-col lg:flex-row gap-10 items-center">
                    {/* Left Image */}
                    <div className="lg:w-1/2">
                        <Image
                            src="/img/why-us.jpg"
                            alt="Why choose us"
                            width={600}
                            height={400}
                            className="rounded-lg shadow"
                        />
                    </div>

                    {/* Right Features */}
                    <div className="lg:w-1/2 space-y-6">
                        {features.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-4">
                                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100">
                                    {feature.icon}
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold">{feature.title}</h4>
                                    <p className="text-sm text-gray-600">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
