define(["require","exports","module","common/bi/error/biComponentErrorFactory","./ReportStatusError","./ReportRenderError"],function(r,o,e){"use strict";var t=r("common/bi/error/biComponentErrorFactory"),n=r("./ReportStatusError"),u=r("./ReportRenderError");return t.reportStatus=function(r){return new n(r)},t.reportRender=function(r){return new u(r)},t});