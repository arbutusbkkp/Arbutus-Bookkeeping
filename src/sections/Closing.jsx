import { CTABanner, EmailCaptureForm } from '../components/index.js';
import { submitForm } from '../lib/formSubmit.js';

export function Closing() {
  return (
    <CTABanner title="Every month you wait costs you clarity." body="Send your email and I&rsquo;ll come back with two questions and a time to talk. Twenty minutes, no pitch, no obligation.">
      <EmailCaptureForm
        note="I read and reply to these myself, usually the same day."
        onSubmit={(email) => {
          submitForm({ form: 'email-capture', email }).catch((err) => console.error('Email capture submission failed', err));
        }}
      />
    </CTABanner>
  );
}
