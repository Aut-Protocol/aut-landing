import React, { useState, Fragment } from "react";
import Heading from "common/components/Heading";
import Container from "common/components/UI/Container";
import { Icon } from "react-icons-kit";
import { plus } from "react-icons-kit/entypo/plus";
import { minus } from "react-icons-kit/entypo/minus";
import Section, { SectionHeading, RcCollapse, FAQContainer } from "./faq.style";
import { Panel } from "rc-collapse";
import motion from "./motion-util";
import { QAData } from "common/data";

const Faq = () => {
  const [activeKey, setActiveKey] = useState(1);

  const onChange = (activeKey) => {
    setActiveKey(activeKey);
  };

  return (
    <Section id="faq">
      <Container className="container">
        <FAQContainer>
          <RcCollapse
            collapsible={undefined}
            accordion={true}
            activeKey={activeKey}
            onChange={onChange}
            openMotion={motion}
          >
            {QAData.faqs?.map((faq, i) => {
              if (i % 2 === 0) {
                return (
                  <Panel
                    key={faq.id}
                    showArrow={false}
                    header={
                      <Fragment>
                        <Heading as="h4" content={faq.title} />
                        <span className="icon">
                          <Icon icon={minus} size={20} className="minus" />
                          <Icon icon={plus} size={20} className="plus" />
                        </span>
                      </Fragment>
                    }
                  >
                    {faq.description}
                  </Panel>
                );
              }
            })}
          </RcCollapse>
          <RcCollapse
            collapsible={undefined}
            accordion={true}
            activeKey={activeKey}
            onChange={onChange}
            openMotion={motion}
          >
            {QAData.faqs?.map((faq, i) => {
              if (i % 2 !== 0) {
                return (
                  <Panel
                    key={faq.id}
                    showArrow={false}
                    header={
                      <Fragment>
                        <Heading as="h4" content={faq.title} />
                        <span className="icon">
                          <Icon icon={minus} size={20} className="minus" />
                          <Icon icon={plus} size={20} className="plus" />
                        </span>
                      </Fragment>
                    }
                  >
                    {faq.description}
                  </Panel>
                );
              }
            })}
          </RcCollapse>
        </FAQContainer>
      </Container>
    </Section>
  );
};

export default Faq;
