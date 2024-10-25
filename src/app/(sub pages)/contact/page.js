import Image from "next/image";
import bg from "../../../../public/background/contact.jpg";
import Form from "@/components/contact/Form";

export default function Contact() {
  return (
    <>
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background-image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25"
      />

      <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <h1 className="text-accent font-semibold text-center text-4xl capitalize">
            Send me an owl 🦉✨
          </h1>
          <p className="text-center font-light text-sm xs:text-base">
            Enter the ancient circle of enchantment, where words become spells
            and intentions take flight. Let your message flow through the
            Wizarding World’s hidden currents—whether to unlock arcane secrets,
            summon allies, or share tales from lands afar. Send your owl on
            wings of magic and await the answer as whispers from realms unseen
            weave their way back to you.
          </p>
        </div>
        <Form />
      </article>
    </>
  );
}
