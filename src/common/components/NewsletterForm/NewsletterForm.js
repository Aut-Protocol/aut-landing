import { decode } from "html-entities";
import Input from "../Input";
import { Controller, useForm } from "react-hook-form";
import Text from "../Text";
import NewsletterFormWrapper from "./NewsletterForm.style";
import Button from "../Button";
import Typography from "../Typography";

const NewsletterForm = ({ status, message, onValidated }) => {
  const { control, handleSubmit, watch } = useForm({
    mode: "onChange",
  });

  const values = watch();

  const onSubmit = () => {
    onValidated({
      EMAIL: values.email,
      // FNAME: values.name,
    });
    return true;
  };

  const onError = () => {
    // error
  };

  const getMessage = (message) => {
    if (!message) {
      return null;
    }

    // const linkRx = /<a\s+(?:[^>]*?\s+)?href=(["'])(.*?)\1/;
    // console.log(message.match(linkRx));

    const msg = message.split("<a")[0];

    const result = msg?.split("-") ?? null;

    if ("0" !== result?.[0]?.trim()) {
      return decode(msg);
    }

    const formattedMessage = result?.[1]?.trim() ?? null;
    return formattedMessage ? decode(formattedMessage) : null;
  };

  return (
    <>
      {status !== "success" ? (
        <>
          <NewsletterFormWrapper
            mt={{
              _: "40px",
              sm: "0px",
            }}
            alignItems={{
              _: "center",
              sm: "flex-start",
            }}
            autoComplete="off"
            onSubmit={handleSubmit(onSubmit, onError)}
            className="d-flex newsletter-input-fields"
          >
            <Typography m="0" color="offWhite" as="subtitle1">
              Stay in touch
            </Typography>
            <Controller
              name="email"
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { name, value, onChange } }) => {
                return (
                  <Input
                    required
                    isMaterial
                    defaultValue={value || ""}
                    name={name}
                    value={value || ""}
                    onChange={onChange}
                    placeholder="Your email address"
                    inputStyles={{
                      width: {
                        _: "245px",
                        lg: "280px",
                        xxl: "320px",
                      },
                    }}
                  />
                );
              }}
            />
            <div className="submit-btn">
              <Button
                isLoading={status === "sending"}
                type="submit"
                title="Submit"
                variant="roundOutlined"
                fontWeight="bold"
                size="normal"
                colors="primary"
              />
            </div>
          </NewsletterFormWrapper>
          <div
            className="newsletter-form-info"
            style={{
              padding: "20px 0",
            }}
          >
            {status === "error" ? (
              <Text
                style={{
                  position: "absolute",
                  color: "red",
                }}
                className="newsletter-form-error"
                dangerouslySetInnerHTML={{ __html: getMessage(message) }}
              />
            ) : null}
          </div>
        </>
      ) : (
        <Text
          className="manifesto-title"
          color="white"
          content="**Your subscription was successful**"
        />
      )}
    </>
  );
};

export default NewsletterForm;
