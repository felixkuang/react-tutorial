const params={
      Value:`contract one {
        action {
          var ret map
          ret = DBFind("contracts").Columns("id,value").WhereId(10).Row()
          $result = ret["id"]
      }}`,
      ApplicationId:'1',
      Conditions:`true`
    };

    console.log(JSON.stringify(params));