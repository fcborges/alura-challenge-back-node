/**
 * Arquivo para teste da api para gerenciamento de exames
 * @author Fatima C Borges
 */

var should = require("should");
var request = require("request");
var chai = require("chai");
var expect = chai.expect;
var urlBase = "http://localhost:3000";

describe("Teste API Exames", function () {
    it("Cadastrar um exame", function (done) {
        request.get(
            {
                url: urlBase + "/exames"
            },
            function (error, response, body) {

                var _body = {};
                try {
                    _body = JSON.parse(body);
                }
                catch (e) {
                    _body = {};
                }

                expect(response.statusCode).to.equal(200);
          
                done();
            }
        );
    });

    it("Consultar exame id 1 ", function (done) {
        request.get({ url: urlBase + "/exames/1" },
            function (error, response, body) {
                var _body = {};
                try {
                    _body = JSON.parse(body);
                }
                catch (e) {
                    _body = {};
                }

                expect(response.statusCode).to.equal(200);

                done();
            }
        );
    });
});