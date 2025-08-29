import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { useState } from "react";
import emailjs from "@emailjs/browser";

// ---- Types ----
type ContactFormInputs = {
  name: string;
  email: string;
  phone: string;
  subject: string; // Filière - Parcours
  message: string;
};

type Cursus = {
  filiere: string;
  parcours: string[];
};

type ModalProps =
  | { type: "success"; message: string; onClose: () => void }
  | { type: "error"; message: string; onClose: () => void };

// ---- Données des cursus ----
const cursusOptions: Cursus[] = [
  { filiere: "BTS", parcours: ["Gestion", "Santé", "Industriel"] },
  { filiere: "HND", parcours: [] },
  { filiere: "Licence Pro", parcours: ["Gestion", "Santé", "Industriel"] },
  {
    filiere: "Bachelor's Degree",
    parcours: ["Gestion", "Santé", "Industriel"],
  },
  { filiere: "Master Pro", parcours: ["Gestion", "Santé", "Industriel"] },
  { filiere: "Master Degree", parcours: ["Gestion", "Santé", "Industriel"] },
];

// ---- Modal ----
const Modal: React.FC<ModalProps> = ({ type, message, onClose }) => {
  const bgColor = type === "success" ? "bg-green-100" : "bg-red-100";
  const textColor = type === "success" ? "text-green-800" : "text-red-800";

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-30" onClick={onClose} />
      <div
        className={`relative p-6 rounded-xl shadow-lg ${bgColor} ${textColor} max-w-sm w-full`}
      >
        <p className="text-center">{message}</p>
        <button
          className={`mt-4 px-4 py-2 rounded-full border ${textColor} border-current hover:bg-opacity-10 transition`}
          onClick={onClose}
        >
          Fermer
        </button>
      </div>
    </div>
  );
};

// ---- Formulaire ----
const ContactForm = () => {
  const [modal, setModal] = useState<ModalProps | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormInputs>();

  const formValues = watch(); // Watch all fields

  // Button is enabled only if all fields are filled & no errors
  const isFormValid =
    formValues.name?.trim() &&
    formValues.email?.trim() &&
    formValues.phone?.trim() &&
    formValues.subject?.trim() &&
    formValues.message?.trim() &&
    Object.keys(errors).length === 0;

  const onSubmit: SubmitHandler<ContactFormInputs> = async (data) => {
    const [filiere, parcours] = data.subject.split(" - ");

    try {
      await emailjs.send(
        "service_qk9gqad", // Replace with your Service ID
        "template_imi38aj", // Replace with your Template ID
        {
          name: data.name,
          email: data.email,
          phone: data.phone,
          subject: data.subject,
          filiere: filiere ?? data.subject,
          parcours: parcours ?? "",
          message: data.message,
        },
        "f2Bl4eR-rdXz8O_Ra" // Replace with your Public Key
      );

      reset();
      setModal({
        type: "success",
        message: "Votre message a été envoyé avec succès !",
        onClose: () => setModal(null),
      });
    } catch (err) {
      console.error("EmailJS error:", err);
      setModal({
        type: "error",
        message: "Erreur lors de l'envoi du message.",
        onClose: () => setModal(null),
      });
    }
  };

  return (
    <>
      <div className="max-w-3xl mx-auto px-6 py-12 bg-white rounded-2xl shadow-xl animate-slideUp">
        <h2 className="text-3xl font-bold mb-8 text-center">Contactez-nous</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Nom */}
          <div className="relative">
            <input
              type="text"
              {...register("name", { required: "Le nom est requis" })}
              placeholder="Nom"
              className={`peer w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary transition-all ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              {...register("email", {
                required: "L'email est requis",
                pattern: { value: /^\S+@\S+$/i, message: "Email invalide" },
              })}
              placeholder="Email"
              className={`peer w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary transition-all ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Téléphone */}
          <div className="relative">
            <input
              type="tel"
              {...register("phone", {
                required: "Le numéro de téléphone est requis",
                pattern: {
                  value: /^[0-9+\-() ]+$/,
                  message: "Numéro invalide",
                },
              })}
              placeholder="Numéro de téléphone"
              className={`peer w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary transition-all ${
                errors.phone ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Sujet / Parcours */}
          <div className="relative">
            <label className="block text-sm font-medium mb-1">
              Sujet / Parcours
            </label>
            <select
              {...register("subject", { required: "Le sujet est requis" })}
              className={`w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary transition-all ${
                errors.subject ? "border-red-500" : "border-gray-300"
              }`}
              defaultValue=""
            >
              <option value="" disabled hidden>
                Choisissez un parcours
              </option>
              {cursusOptions.map(({ filiere, parcours }) =>
                parcours.length > 0 ? (
                  parcours.map((p) => (
                    <option key={`${filiere}-${p}`} value={`${filiere} - ${p}`}>
                      {filiere} - {p}
                    </option>
                  ))
                ) : (
                  <option key={filiere} value={filiere}>
                    {filiere}
                  </option>
                )
              )}
            </select>
            {errors.subject && (
              <p className="text-red-500 text-sm mt-1">
                {errors.subject.message}
              </p>
            )}

            {/* Affichage dynamique du parcours choisi */}
            {formValues.subject && (
              <p className="text-primary text-sm mt-1 animate-pulse">
                Parcours sélectionné: {formValues.subject}
              </p>
            )}
          </div>

          {/* Message */}
          <div className="relative">
            <textarea
              rows={5}
              {...register("message", { required: "Le message est requis" })}
              placeholder="Message"
              className={`w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none ${
                errors.message ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Bouton Submit */}
          <div className="text-center">
            <button
              type="submit"
              disabled={!isFormValid || isSubmitting}
              className={`px-8 py-3 rounded-full transition-transform duration-200 ${
                isFormValid
                  ? "bg-primary text-white hover:scale-105"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              {isSubmitting ? "Envoi..." : "Envoyer"}
            </button>
          </div>
        </form>
      </div>

      {/* Modal */}
      {modal && <Modal {...modal} />}
    </>
  );
};

export default ContactForm;
