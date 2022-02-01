import Btn from "./Btn";
import ContactItem from "./ContactItem";
import Field from "./Field";
import SubTitle from "./SubTitle";
import Title from "./Title";

export default function Contact() {
  return (
    <>
      <section className="container mx-auto" id="contact">
        <div className="bg-gray-100 rounded-xl">
          <div className="sm:flex">
            <div className="sm:w-6/12 w-full sm:border-r-2 border-b-2 border-gray-200 pt-10 sm:py-10 pl-10 lg:py-20 lg:pl-20">
              <Title left="true">Contact</Title>
              <SubTitle left="true">Beberapa cara menghubungi saya</SubTitle>
              <ContactItem
                title="Mail"
                image="/mail.svg"
                value="irfhan@gmail.com"
              />
              <ContactItem
                title="Phone"
                image="/phone.svg"
                value="+6201232183"
              />
              <ContactItem
                title="Twitter"
                image="/twitter.svg"
                value="catharsis"
              />
            </div>
            <div className="sm:w-6/12 w-full py-10 px-10 lg:py-20 lg:px-20">
              <form>
                <div className="lg:flex -mx-4">
                  <div className="w-full lg:w-6/12 px-4">
                    <Field label="Nama" type="text" name="name" />
                  </div>
                  <div className="w-full lg:w-6/12 px-4">
                    <Field label="Email" type="text" name="email" />
                  </div>
                </div>
                <Field label="Subject" type="text" name="subject" />
                <Field label="Message" type="textarea" name="message" />
                <div className="text-right">
                  <Btn variant="black">Kontak</Btn>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
