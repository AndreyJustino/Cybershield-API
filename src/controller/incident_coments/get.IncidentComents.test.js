import app from "../../app.js";
import { incidentComent } from "../../model/model.js";
import request from "supertest";

jest.mock("../../model/model.js")
describe("test controller: getIncidentTypes")