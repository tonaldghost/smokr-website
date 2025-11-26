import {
  UserCircleIcon,
  FirstAidIcon,
  ChartLineIcon,
  CurrencyDollarIcon,
  FlowerIcon,
} from "@phosphor-icons/react";

export default function Features() {
  const features = [
    {
      title: "Identity Change",
      description:
        "Transform your self-image from a smoker to a non-smoker. Build a new identity and reinforce positive habits that support your smoke-free lifestyle.",
      Icon: UserCircleIcon,
    },
    {
      title: "Cravings Help",
      description:
        "Get instant support when cravings strike. Access proven techniques and strategies to overcome urges and stay on track with your quit journey.",
      Icon: FirstAidIcon,
    },
    {
      title: "Progress Tracker",
      description:
        "Monitor your smoke-free journey with detailed tracking. See your health improvements, money saved, and cigarettes avoided in real-time.",
      Icon: ChartLineIcon,
    },
    {
      title: "Savings Calculator",
      description:
        "Watch your savings grow every day. Calculate exactly how much money you've saved by quitting and set goals for rewarding yourself.",
      Icon: CurrencyDollarIcon,
    },
    {
      title: "Calm Meditation",
      description:
        "Find peace during difficult moments with guided meditation sessions. Use mindfulness techniques to manage stress and overcome cravings naturally.",
      Icon: FlowerIcon,
    },
  ];

  return (
    <section
      id="features"
      className="bg-white pt-16 pb-24 scroll-mt-32 sm:pb-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-neutral-900 sm:text-5xl lg:text-balance">
            Everything You Need to Quit Smoking
          </h2>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature, index) => (
              <div key={index} className="relative pl-16">
                <dt className="text-base/7 font-semibold text-neutral-900">
                  <div
                    style={{
                      boxShadow:
                        "0 -4px 2px 1px rgba(255, 255, 255, 0.025) inset",
                    }}
                    className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-neutral-900 border border-neutral-700"
                  >
                    <feature.Icon
                      className="size-6 text-white"
                      weight="duotone"
                    />
                  </div>
                  {feature.title}
                </dt>
                <dd className="mt-2 text-base/7 text-neutral-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
