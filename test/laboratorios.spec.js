/**
 * Arquivo para teste da api para gerenciamento de laboratórios
 * @author Fatima C Borges
 */

var should = require("should");
var request = require("request");
var chai = require("chai");
var expect = chai.expect;
var urlBase = "http://localhost:3000";

describe("Teste API Laboratórios", function () {
    it("Cadastrar um laboratório", function (done) {
        request.get(
            {
                url: urlBase + "/laboratorios"
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
        request.get({ url: urlBase + "/laboratorios/1" },
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