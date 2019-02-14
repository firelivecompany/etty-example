import Etty from "etty"
import template from "config/template.json"

export type Translation = typeof template
export default new Etty(template)