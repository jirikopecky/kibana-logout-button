export default function (kibana) {
  return new kibana.Plugin({
    name: 'kibana-logout-button',
    require: ['elasticsearch'],
    uiExports: {
        chromeNavControls: ['plugins/kibana-logout-button/views/logout_button'],
    },
    config(Joi) {
      return Joi.object({
        enabled: Joi.boolean().default(true),
      }).default();
    }
  });
};